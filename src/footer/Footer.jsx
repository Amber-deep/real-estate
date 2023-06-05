import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='container'>
       <div className='row flex-footer'>
            <div className='col-md-4 my-md-0 my-3'>
                <img src='./logo2.png' alt='logo' className='mb-2'/>
                <p className='text-secondary'>Our version is to make all people<br/>the best place to live for them.</p>
            </div>
            <div className='col-md-4'>
                <h3 className='purpleText fw-bold'>Information</h3>
                <p className='text-secondary'>145 Muktsar, St No. 7, Muktsar</p>
                <ul style={{paddingLeft:"0px"}}>
                    <li className='ul-styling'>
                      <a href='#residencies' className='text-decoration-none' >Residencies</a>
                    </li>
                    <li className='ul-styling'><a href='#value' className='text-decoration-none'>Value</a></li>
                    <li className='ul-styling'><a href='#contact' className='text-decoration-none'>Contact</a></li>
                    <li className='ul-styling'><a href='#homyz' className='text-decoration-none'>Homyz</a></li>
                </ul>
            </div>
       </div>
    </div>
  )
}

export default Footer
