import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {
    const[name,setName]=useState(null);
    const[weather,setWeather]=useState(null);
    const[icon,setIcon]=useState(null);


            useEffect(()=>{
                axios.post( 'https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=854b99045464d94f0610f1577a400ff1')
                .then(res=>{
                    setIcon(res.data.weather[0].icon)
                    document.getElementById('img').src = "http://openweathermap.org/img/wn/" + res.data.weather[0].icon + "@2x.png";
                    setName(res.data.name)
                    setWeather(res.data.main.temp)
                }).catch(err => console.log(err))      
            },[])
    return ( 
        <div style={{color:"white",display:"flex",height:"10%",backgroundColor:"#364d79",justifyContent:"space-around",fontSize:"12px !important"}}>
            <p style={{fontSize:"10px",paddingTop:"5px"}}>{name}</p>
            <p style={{fontSize:"10px",paddingTop:"5px"}}>{weather} F</p>
            
            <img  id="img" style={{width:"8%"}}/>
            
        </div>
     );
}
 
export default Header;

