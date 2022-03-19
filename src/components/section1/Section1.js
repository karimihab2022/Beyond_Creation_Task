import React from 'react';
import "./Section1.css"
import im from "./section1.jpg"
import { Button } from 'antd';

const Section1 = () => {
    return (  
        <div className='section1-cont'>
            <img src={im} width={"40%"} className='section1-img'/>
            <div className='section1-content'>
                <h3 className='h2'>The place</h3>
                <h2 className='h2'>we call home</h2>
                <p>Makadi Heights is a town built over 3.4 million square
                    meters planned for development, with an elevation
                    reaching 78 meters above sea level guaranteeing
                    magnificent panoramic sea views residential units.
                    Envisioned as a comprehensive town
                </p>
                <div className='section1-buttons'>
                <Button size='small' className='btn'>DOWNLOAD BROCHURE</Button>
                <Button  size='small' className='btn'>SHOW MASTER PLAN</Button>
                </div>
               
               
            </div>
            
        </div>
    );
}
 
export default Section1;
