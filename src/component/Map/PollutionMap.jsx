/* eslint-disable react-hooks/rules-of-hooks */
import { MapContainer, TileLayer, Marker, useMap, Circle, Popup } from 'react-leaflet'
import * as BreezometerService from '../../service/breezometer.service'
import { Table, Tag, Tabs  } from 'antd';
import { useState, useEffect } from 'react';
import moment from 'moment';

const PollutionMap = ({address}) => {
  const [pollutions, setPollution] = useState(null)

  useEffect(() => {
    if (address.zoom) {
      BreezometerService.getAirQuality(address.lat, address.lon)
        .then(pollutionData => {
          setPollution(pollutionData.data)
        }) 
    }
  }, [address])

  const getTableData = (index) => {
    const dataSource = [pollutions[index]?.indexes?.baqi]
      .map(pollution => {
        return {
          type: pollution.dominant_pollutant,
          aqi: pollution.aqi || 'No data',
          category: <Tag color={pollutions.color}>
            {pollution?.category || 'No data'}
          </Tag>,
        }
      })
    const columns = [
      {title: 'Aqi', dataIndex: 'aqi', key: 'aqi'},
      {title: 'type', dataIndex: 'type', key: 'type'},
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

  let dataSource = [];
  let columns = [];
  if (pollutions) {
    ({dataSource, columns} = getTableData(0))
  }
  return <div>
    <h1> {"Carte de Pollution de l'air"} </h1>
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
      {pollutions && <SetViewOnClick address={address} dataSource={dataSource} columns={columns}/>}
      <Marker position={[address.lat, address.lon]}/>
      {pollutions && <Circle 
        center={[address.lat, address.lon]} 
        pathOptions={{ color: pollutions[0].indexes?.baqi.color}} 
        radius={3000}
      />}
    </MapContainer>
    <Tabs defaultActiveKey="1" centered style={{width: '80%'}}>
      {pollutions && pollutions.map((pollution, index) => {
        const { dataSource, columns } = getTableData(index);
        return <Tabs.TabPane tab={moment(pollution.datetime).format('DD / MM / YYYY')} key={index}>
          <Table pagination={false} dataSource={dataSource} columns={columns}/>
        </Tabs.TabPane>
      })}
    </Tabs>
  </div>
}

export default PollutionMap;