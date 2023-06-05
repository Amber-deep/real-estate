import React from 'react'
import './getstarted.css'

const GetStarted = () => {
  return (
    <div className='container cont bg-primary mb-5 py-5' id='getstarted'>
      <div className='w-75 m-auto text-center'>
        <h2 className='text-white text-center'>Get started with HOMYZ</h2>
        <p className='text-center' style={{color: "rgb(255,165,0)"}}>Subscribe and find super attractive quotes from us.<br/>Find your residence soon.</p>
        <button className='btn btn-styling'>Get Started</button>
      </div>
    </div>
  )
}

export default GetStarted
