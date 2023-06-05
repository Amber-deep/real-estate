import React from 'react'
import './companies.css'

const Companies = () => {
  return (
    <div className='container'>
      <div className='row my-5 text-center'>
        <div className='col-md-3 col-6'>
            <img src='./prologis.png' alt='prologis' className='my-3' width={100}/>
        </div>
        <div className='col-md-3 col-6'>
            <img src='./tower.png' alt='prologis' className='my-3' width={100}/>
        </div>
        <div className='col-md-3 col-6'>
            <img src='./equinix.png' alt='prologis' className='my-3' width={100}/>
        </div>
        <div className='col-md-3 col-6'>
            <img src='./realty.png' alt='prologis' className='my-3' width={100}/>
        </div>
      </div>
    </div>
  )
}

export default Companies
