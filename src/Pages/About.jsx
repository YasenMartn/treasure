import React from 'react';
import Circle from "../Components/Circle"

const About = () => {
  return (
    <div className='about'>
        <h1 className="title">About us</h1>
        <p className="info">Treasure is an awesome React application based on fake-store-api that sells products such 
        as men's clothing, women's clothing, jewelery & electronics. It was designed and developed by Yassin Laghzaouna.
        For more info, head to the contact section or click the following link.
        
        </p>
        <Circle right="-250px" top="-250px" bgColor="hotpink"/>
        <Circle left="-250px" bottom="-300px" bgColor="green"/>
    </div>
  )
}

export default About