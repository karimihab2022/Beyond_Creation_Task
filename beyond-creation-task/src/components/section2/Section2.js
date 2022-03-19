import { Carousel,Button } from 'antd';
import React, { useRef, useState } from "react";
import "./Section2.css"
import {HomeOutlined,TrophyOutlined,CoffeeOutlined,ShoppingOutlined,CrownOutlined,ThunderboltOutlined } from '@ant-design/icons';


const Section2 = () => {
    const contentStyle = {
        height: '230px',
        color: '#fff',
        textAlign: 'center',
        background: '#364d79',
        paddingTop:"10%",
      };

    const [slide, setSlide] = useState(0);

    const slider = useRef();
    return (  
        <div className='section2-cont'>
            <div className='control'>
            <h4>Discover Lifestyle</h4>
                <h2>Amentities</h2>
                <p>Occupying a land area of 33,000 square meters,
                    Makadi Heights' stunning clubhouse            
                </p>
                <div className='icons'>
                    <div onClick={()=>{
                            setSlide(0)
                            slider.current.goTo(0)}} className={slide===0?"active":"notactive"}>
                        <ShoppingOutlined />
                         <p>COMMERCIAL AREAS</p>
                         <p>Downtown</p>
                         <p>Makadi Heights Mall</p>
                    </div>
                    <div onClick={()=>{
                            setSlide(1)
                            slider.current.goTo(1)}}className={slide===1?"active":"notactive"}>
                         <TrophyOutlined />
                         <p>SPORTS FACILITIES</p>
                         <p>Sports Courts<br></br>Fitness Center</p>
                    </div>
                    <div onClick={()=>{
                            setSlide(2)
                            slider.current.goTo(2)}}className={slide===2?"active":"notactive"}>
                            <CrownOutlined />
                         <p>KIDS FRIENDLY AREAS</p>
                         <p>Kids Aqua Park</p>
                         <p>Kids Areas</p>

                    </div>
                    <div onClick={()=>{
                            setSlide(3)
                            slider.current.goTo(3)}}className={slide===3?"active":"notactive"}>
                            <CoffeeOutlined />
                             <p>CENTRAL PARK</p>
                         <p>far far away, behind <br></br>the world mountains</p>
                    </div>
                    <div onClick={()=>{
                            setSlide(4)
                            slider.current.goTo(4)}}className={slide===4?"active":"notactive"}>
                         <HomeOutlined/>
                         <p>HOTELS</p>
                         <p>far far away, behind <br></br>the world mountains</p>
                    </div>
                    <div onClick={()=>{
                            setSlide(5)
                            slider.current.goTo(5)}}className={slide===5?"active":"notactive"}>
                         <ThunderboltOutlined />
                         <p>MEDICAL FACILITIES</p>
                         <p>far far away, behind <br></br>the world mountains</p>
                    </div>
                  
                   
                </div>
            
                 
               
            </div>
            <div className="Carousel">
            <Carousel swipeToSlide="true"  ref={(ref) => {
                    console.log(ref);
                    slider.current = ref;
                }} afterChange={(e)=>setSlide(e)} >
            <div>
            <h3 style={contentStyle}>
                 <ShoppingOutlined /><br></br>
                         <span>COMMERCIAL AREAS</span>
                         <p>Downtown</p>
                         <p>Makadi Heights Mall</p>
            </h3>
            </div>
            <div>
            <h3 style={contentStyle}> <TrophyOutlined /><br></br>
                         <span>SPORTS FACILITIES</span>
                         <p>Sports Courts<br></br>Fitness Center</p></h3>
            </div>
            <div>
            <h3 style={contentStyle}><CrownOutlined /><br></br>
                         <span>KIDS FRIENDLY AREAS</span>
                         <p>Kids Aqua Park</p>
                         <p>Kids Areas</p></h3>
            </div>
            <div>
            <h3 style={contentStyle}>   <CoffeeOutlined /><br></br>
                             <span>CENTRAL PARK</span>
                         <p>far far away, behind <br></br>the world mountains</p></h3>
            </div>
            <div>
            <h3 style={contentStyle}><HomeOutlined/><br></br>
                         <span>HOTELS</span>
                         <p>far far away, behind <br></br>the world mountains</p></h3>
            </div>
            <div>
            <h3 style={contentStyle}><ThunderboltOutlined /><br></br>
                         <span>MEDICAL FACILITIES</span>
                         <p>far far away, behind <br></br>the world mountains</p></h3>
            </div>
             </Carousel>
            </div>
            
        </div>
    );
}
 
export default Section2;