import React from 'react'
import './heading.css'

const Heading = () => {
  return (
    // <section className='container-fluid bg-dark'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav py-0"  id='homyz'>
            <div className="container bg-black text-primary">
                <a className="navbar-brand" href="/">
                    <img src='./logo.png' alt='logo'/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-primary">
                    <li className="nav-item me-2 mt-2">
                    <a className="nav-link active text-primary" aria-current="page" href="#residencies">Residencies</a>
                    </li>
                    <li className="nav-item me-2 mt-2">
                    <a className="nav-link text-primary" href="#value">Our values</a>
                    </li>
                    <li className="nav-item me-2 mt-2">
                    <a className="nav-link text-primary" href="#contact">Contact us</a>
                    </li>
                    <li className="nav-item me-2 mt-2">
                    <a className="nav-link text-primary" href="#getstarted">Get Started</a>
                    </li>
                    <button className='btn bg-white me-2'>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="tel:+91 9463015819">Contact</a>
                        </li>
                    </button>
                </ul>
                </div>
            </div>
        </nav>
    // </section>
  )
}

export default Heading
