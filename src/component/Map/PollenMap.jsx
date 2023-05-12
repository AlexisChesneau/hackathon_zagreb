/* eslint-disable react-hooks/rules-of-hooks */
import { MapContainer, TileLayer, Marker, useMap, Circle, Popup } from 'react-leaflet'
import * as BreezometerService from '../../service/breezometer.service'
import { Table, Tag  } from 'antd';
import { useState, useEffect } from 'react';

const PollenMap = ({address}) => {
  const [pollens, setPollens] = useState(null)

  useEffect(() => {
    if (address.zoom) {
      BreezometerService.getPollen(address.lat, address.lon).then(pollenData => {
        setPollens(pollenData.data[0])
      }) 
    }
  }, [address])

  const getTableData = () => {
    const dataSource = Object.keys(pollens?.types).map(type => {
      const pollenIndex = pollens?.types[type]?.index?.value
      const pollenColor = pollenIndex < 1 ? 'green' : pollenIndex < 2 ?
        'yellow' : pollenIndex < 3 ? 'orange' : pollenIndex < 4 ? 'red' : 'purple'
      return {
        type: type,
        index: pollenIndex ? `${pollenIndex}/5` : 'No data',
        category: <Tag color={pollenColor}>
          {pollens?.types[type]?.index?.category || 'No data'}
        </Tag>,
      }
    })
    const columns = [
      {title: 'Type', dataIndex: 'type', key: 'type'},
      {title: 'Index', dataIndex: 'index', key: 'index'},
      {title: 'Category', dataIndex: 'category', key: 'category'},
    ]
    return {dataSource, columns}
  }

  const SetViewOnClick = ({address, dataSource, columns}) => {
    if (address) {
      const map = useMap();
      map.setView([address.lat, address.lon], address.zoom);
    }
    return  <Popup position={[address.lat+0.001, address.lon]}>
      <Table pagination={false} dataSource={dataSource} columns={columns}/>
    </Popup>
  }

  
  const pollenIndex = pollens?.types?.grass?.index?.value;
  const pollenColor = pollenIndex < 1 ? 'green' : pollenIndex < 2 ?
    'yellow' : pollenIndex < 3 ? 'orange' : pollenIndex < 4 ? 'red' : 'purple'
  let dataSource = [];
  let columns = [];
  if (pollens) {
    ({dataSource, columns} = getTableData())
  }
  return <div>
    <h1>
      Carte de Pollen
    </h1>
    <MapContainer
      center={[46.603354, 1.888334]}
      zoom={5.5}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        pollens && <SetViewOnClick address={address} dataSource={dataSource} columns={columns}/>
      }
      <Marker position={[address.lat, address.lon]}/>
      {pollenIndex && <Circle 
        center={[address.lat, address.lon]} 
        pathOptions={{ color: pollenColor}} 
        radius={3000}
      />}
    </MapContainer>,
  </div>
}

export default PollenMap;