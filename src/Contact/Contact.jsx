import React from 'react'
import './contact.css'
import {MdCall} from 'react-icons/md'
// import {BsFillChatDotsFill} from 'react-icons/bs'
// import {HiChatBubbleButtomCenter} from 'react-icons/hi2' 

const Contact = () => {
  return (
    <div className='container' id='contact'> 
      <div className='row my-5'>
        <div className='col-md-6'>
            <div className='mb-3'>
                <h3 className='orangeText'>Our Contacts</h3>
                <h2 className='purpleText mb-4'>Easy to Contact us</h2>
                <p className='text-secondary'>
                    <span>We always ready to help by providing the best services for you. </span>
                    <span>We believe a good place to live can make oyur life better.</span>
                </p>
            </div>
            <div className='row'>
                <div className='col-md-6 col-12 '>
                    <div className='m-3 styling'>    
                        <div className='m-3'>
                            <div className='flex mb-3'>
                                <div className='iconn'>
                                    <MdCall/>
                                </div>
                                <div>
                                    <p className='fs-5 fw-bold purpleText  mb-md-0'>Call</p>
                                    <p className='text-secondary'>021 123 132 4532</p>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-primary text-white'>Call now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12'>
                    <div className='m-3 styling'>    
                        <div className='m-3'>
                            <div className='flex mb-3'>
                                <div className='iconn'>
                                    <MdCall/>
                                </div>
                                <div>
                                    <p className='fs-5 fw-bold purpleText mb-0'>Call</p>
                                    <p className='text-secondary'>021 123 132 4532</p>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-primary text-white'>Call now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12 '>
                    <div className='m-3 styling'>    
                        <div className='m-3'>
                            <div className='flex mb-3'>
                                <div className='iconn'>
                                    <MdCall/>
                                </div>
                                <div>
                                    <p className='fs-5 fw-bold purpleText mb-md-0'>Call</p>
                                    <p className='text-secondary'>021 123 132 4532</p>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-primary text-white'>Video Call now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12'>
                    <div className='m-3 styling'>    
                        <div className='m-3'>
                            <div className='flex mb-3'>
                                <div className='iconn'>
                                    <MdCall/>
                                </div>
                                <div>
                                    <p className='fs-5 fw-bold purpleText mb-md-0'>Call</p>
                                    <p className='text-secondary'>021 123 132 4532</p>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-primary text-white'>Message now</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='col-md-6'>
        <div className='image-container'>
            <img src='./contact.jpg' alt='hero-img' className='imgg' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
