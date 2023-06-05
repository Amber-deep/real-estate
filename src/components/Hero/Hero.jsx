import React from 'react'
import './hero.css'
import CountUp from 'react-countup'

const Hero = () => {
    
  return (
    <section className='bg-black'> 
        <div className='container'>
            <div className='row pt-5'>
                <div className='col-md-6 text-white my-5 discover'>
                    <div>
                        <h1 className='dis'>
                            DISCOVER<br/>
                            MOST SUITABLE<br/>
                            PROPERTY<br/>
                        </h1>
                    </div>

                    <div className="description my-4">
                        <span>Find the varient of property that suits you easily</span>
                        <span>Forget all the difficulties in finding a residence for you</span>
                    </div>
                    <div className='search-bar'>
                        <input type='text' placeholder='Search your favourite place' />
                        <button className='btn bg-primary'>Search</button>
                    </div>
                    <section className="container">
                        <div className="row contain my-5">
                            <div className="col-4 text-center ">
                                <i className="fa-brands fa-facebook-f"></i>
                                <h2>
                                    <CountUp start={0} end={9000} duration={4}/>
                                </h2>
                                <p>Facebook</p>
                            </div>
                            <div className="col-4 text-center ">
                                <i className="fa-brands fa-instagram"></i>
                                <h2>
                                    <CountUp start={0} end={13000} duration={4}/>
                                </h2>
                                <p>Instagram</p>
                            </div>
                            <div className="col-4 text-center ">
                                <i className="fa-brands fa-linkedin"></i>
                                <h2>
                                    <CountUp start={0} end={8000} duration={4}/>
                                </h2>
                                <p>Linkedin</p>
                            </div>

                        </div>
                    </section>
                </div>

                <div className='col-md-6'>
                    <div className='image-container'>
                        <img src='./hero-image.png' alt='hero-img' className='imgg' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
