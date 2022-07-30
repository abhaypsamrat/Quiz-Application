import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='content'>
      <div className="setting">
        <span style={{fontSize: 30}}>Quiz setting</span>
      </div>
      <img src='./quiz.svg' className='banner' alt='quiz img'/>
    </div>
  )
}

export default Home