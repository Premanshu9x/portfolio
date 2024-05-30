import React from 'react'

const Progress = ({ name, arr }) => {
    return (
        <div data-aos="fade-in">
            <b><i>{name}</i></b>
            <hr />
            {
                arr.map((item) => {
                    const percentage = item.percent;
                    return (
                        <div className='py-3'>
                            <div className='d-flex justify-content-between'>
                                <span><i>{item.skill}</i></span>
                                <span style={{ color: 'rgb(255, 0, 179)' }}><b>{item.percent}</b></span>
                            </div>
                            <div className="progress" style={{ height: '5px' }}>
                                <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: `${percentage}` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Progress