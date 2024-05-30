import React from 'react'
import header from '../assests/header-img.svg'

const Details = () => {
  return (
    <div className='container Details mt-5'>
        <div className='row'>
            <div className='col-lg-6 col-sm-12 text-center' >
                <img src={header} alt="" />
            </div>
            <div className='col-lg-6 col-sm-12 my-auto d-flex flex-column gap-3 About' data-aos="fade-left">
                <h2>ABOUT ME</h2>
                <b className=''>Developer <span className='text-danger'>& Designer</span></b>
                <p>As a front-end web developer, I specialize in delivering clean, efficient code and ensuring pixel-perfect design across all projects. With a keen eye for detail, I meticulously craft user interfaces to achieve flawless visual presentation. Moreover, I thrive on enhancing user engagement by integrating captivating web animations, making websites not only visually appealing but also highly interactive and memorable.</p>
                <a href="./pdfs/PREMANSHU SHARMA RESUME.pdf" download="Resume.pdf">Download CV</a>
            </div>
        </div>
    </div>
  )
}

export default Details