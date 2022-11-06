import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css'
import axios from 'axios';
const API_Key="d11f41ce45ea37ecc9657ea991a8a30d";

function App() {
  const API_Key='d11f41ce45ea37ecc9657ea991a8a30d'
  const [data,setData]=useState({})
  const [inputcity,setInputCity]=useState("")
const getweatherDetails=(cityname)=>{
  if(!cityname) return
  const API_Url="https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid="+API_Key
  axios.get(API_Url).then((res)=>{
    console.log('response',res);
    setData(res.data)
  }).catch((err)=>{
    console.log("error")
  })
}
const handleChangeInput=(e)=>{
setInputCity(e.target.value)
}
const handlesearch=()=> {
  getweatherDetails(inputcity)
}
useEffect(()=>{
getweatherDetails("tetouan")
},[])
  return (
    <div className="col-md-12">
     <div className='weatherbg'>
      <h1 className='heading'>Weather App</h1>
<div className='d-grid gap-3 col-4 mt-4'>
     <input type="text"  className='form-control' 
     onChange={handleChangeInput}
     value={inputcity}
     />
     <button className='btn btn-primary' type='button' onClick={handlesearch}>search</button>
     </div>
     </div>
     <div className='col-md-12 text-center mt-5'>
<div className='shadow rounded weatherResultBox'>
    <img className='weathericon'
    src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"/>
    <h5 className='weathercity'>{data?.name}</h5>
  <h6 className='weathertemp'>{((data?.main?.temp) - 273.15).toFixed(0)} °C</h6>
</div>
     </div>
    </div>
  );
}

export default App;
