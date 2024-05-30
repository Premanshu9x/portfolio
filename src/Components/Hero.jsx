import React from 'react'
import me from '../assests/me.png'

const Hero = () => {
  return (
    <div className='container Hero text-white'>
        <div className='row'>
            <div className='col-lg-6 my-auto order-lg-1 order-2 position-relative' data-aos="fade-right">
                <h1>Hey I'm</h1>
                <h1>Premanshu</h1>
                <h6 className='mt-3'>Passionate Web Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</h6>
                
            </div>
            <div className='col-lg-6  order-lg-2 order-1 d-flex justify-content-evenly'>
                <div><img src={me} className='my-5' alt="my image" /></div>

                <div className='d-flex flex-column align-items-center justify-content-center Skills'>
                    <span><i className="p-3 fs-3 fa-brands fa-html5"></i></span>
                    <span><i className="p-3 fs-3 fa-brands fa-css3-alt"></i></span>
                    <span><i className="p-3 fs-3 fa-brands fa-js"></i></span>
                    <span><i className="p-3 fs-3 fa-brands fa-react"></i></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero