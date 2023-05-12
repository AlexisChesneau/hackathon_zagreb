import PollenMap from './PollenMap'
import PollutionMap from './PollutionMap';
import * as MapBoxService from '../../service/mapbox.service'
import { AutoComplete, Input, Col, Row  } from 'antd';
import { useState } from 'react';

const Map = () => {
  const [addressList, setAddressList] = useState([])
  const [address, setAddress] = useState({lat: 46.603354, lon: 1.888334})

  const onSelect = async (label, value) => {
    setAddress({...value, zoom: 13});
  }

  const onSearchAddress = async (value) => {
    const response = await MapBoxService.searchAddress(value)
    setAddressList(response.features.map((feature) => ({
      value: feature.place_name,
      label: feature.place_name,
      lon: feature.geometry.coordinates[0],
      lat: feature.geometry.coordinates[1]
    })))
  }

  return <>
    <AutoComplete
      style={{ width: '50%', marginTop: '2%', marginBottom: '2%' }}
      options={addressList}
      onSearch={onSearchAddress}
      onSelect={onSelect}
      icon={<i className="fas fa-map-marker-alt"></i>}
    >
      <Input.Search size="large" placeholder="Entrer une adresse" enterButton />
    </AutoComplete>
    <Row>
      <Col span={12}>
        <PollenMap address={address}/>
      </Col>
      <Col span={12}>
        <PollutionMap address={address}/>
      </Col>
    </Row>
  </>
}

export default Map