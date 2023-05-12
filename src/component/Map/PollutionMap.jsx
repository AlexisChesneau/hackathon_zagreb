/* eslint-disable react-hooks/rules-of-hooks */
import { MapContainer, TileLayer, Marker, useMap, Circle, Popup } from 'react-leaflet'
import * as BreezometerService from '../../service/breezometer.service'
import { Table, Tag  } from 'antd';
import { useState, useEffect } from 'react';

const PollutionMap = ({address}) => {
  const [pollutions, setPollution] = useState(null)

  useEffect(() => {
    if (address.zoom) {
      BreezometerService.getAirQuality(address.lat, address.lon)
        .then(pollutionData => {
          setPollution(pollutionData.data.indexes?.baqi)
        }) 
    }
  }, [address])

  const SetViewOnClick = ({address, pollutions}) => {
    if (address) {
      const map = useMap();
      map.setView([address.lat, address.lon], address.zoom);
    }
    const dataSource = [pollutions].map(pollution => {
      return {
        type: pollution.dominant_pollutant,
        aqi: pollution.aqi || 'No data',
        category: <Tag color={pollutions.color}>
          {pollution?.category || 'No data'}
        </Tag>,
      }
    })
    return  <Popup position={[address.lat+0.001, address.lon]}>
      <Table pagination={false} dataSource={dataSource} columns={[
        {title: 'Aqi', dataIndex: 'aqi', key: 'aqi'},
        {title: 'type', dataIndex: 'type', key: 'type'},
        {title: 'Category', dataIndex: 'category', key: 'category'},
      ]}/>
    </Popup>
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
      {pollutions && <SetViewOnClick address={address} pollutions={pollutions}/>}
      <Marker position={[address.lat, address.lon]}/>
      {pollutions && <Circle 
        center={[address.lat, address.lon]} 
        pathOptions={{ color: pollutions.color}} 
        radius={3000}
      />}
    </MapContainer>,
  </div>
}

export default PollutionMap;