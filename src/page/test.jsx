import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { AutoComplete } from 'antd';
import { useState } from 'react';
import axios from 'axios';
const MyMap = () => {
    const [result, setResult] = useState([]);
    
    async function searchAddress(city) {
        if (city.length >= 3){
        const url=`http://openweathermap.org/data/2.5/find?q=${city}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`
        const {data} = await axios(url)
        console.log(data);
        setResult(data.list);
    }
    }
   
    return (
        <div>
            <AutoComplete style={{width: '30%'}} onSearch={searchAddress} options={result.map((eachData, idx) => 
                 ({label:`${eachData.name} (${eachData.sys.country})`, 
                 value: idx})
            )}>
                
                </AutoComplete>
        <MapContainer center={[49.5112 , 1.9655]} zoom={12} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[49.5112 , 1.9655]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</div>  );
}

export default MyMap;