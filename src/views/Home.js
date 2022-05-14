import React from 'react'
import './Home.css';
import LTComponent from '../components/LTComponent'
import Card from '../components/Card'
import RBComponent from '../components/RBComponent'

function Home() {
  return (
    <div 
    className="w-screen h-screen" 
    style={{ 
      backgroundImage: `url(./asset/bg.png)`,
      backgroundSize: 'cover' 
    }}>
      <div className="absolute top-0 left-0 bg-gray-900 w-screen h-1/3 lg:w-1/3 lg:h-screen z-10" /> 
      <LTComponent />
      <Card />
      <RBComponent />         
    </div>
  )
}

export default Home;
 