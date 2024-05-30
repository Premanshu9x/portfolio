import React from 'react'

const Contact = () => {
    return (
        <div className='container Contact mt-5 text-light pb-4' id='Contact'>
            <div className='position-relative'>
                <h2>Contact</h2>
            </div>

            <div className='row mt-5'>
                <div className='col-lg-6 col-sm-12 mx-auto'>
                    <div className='text-center Social p-4 mx-auto' data-aos="fade-up">
                        <i className="fa-regular fa-envelope mb-3"></i>
                        <br />
                        <b className='bold'>09anshu850@gmail.com</b>
                    </div>
                    <div className='text-center Social p-4 mt-5 mx-auto' data-aos="fade-up">
                        <i className="fa-brands fa-github mb-3"></i>
                        <br />
                        <b className='bold'>Premanshu09x</b>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 d-flex justify-content-between flex-column Form'>
                    <div className='d-flex justify-content-between'>
                        <input type="text" className='Input1' placeholder='First Name...' data-aos="fade-up"/>
                        <input type="text" className='Input1' placeholder='Last Name...' data-aos="fade-up"/>
                    </div>

                    <input type="text" className='w-100 Input2 mt-4' placeholder='Email...' data-aos="fade-up"/>

                    <textarea className='w-100 h-25 Input2 Area mt-4' placeholder='Message...' data-aos="fade-up"></textarea>

                    <button className='button' data-aos="fade-up">SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Contact