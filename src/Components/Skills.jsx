import React, { useState } from 'react'
import Progress from '../Items/Progress'

const Skills = () => {
    const frontend = [{ "skill": "HTML5", "percent": "80%" }, { "skill": "CSS3", "percent": "90%" }, { "skill": "JavaScript", "percent": "75%" }, { "skill": "ReactJS", "percent": "90%" }];
    const backend = [{ "skill": "NodeJS", "percent": "70%" }, { "skill": "Express", "percent": "75%" }, { "skill": "MongoDB", "percent": "80%" }];
    const tools = [{ "skill": "GIT & Github", "percent": "75%" }, { "skill": "Visual Studio Code", "percent": "85%" }, { "skill": "Webpack", "percent": "60%" }, { "skill": "Responsive Design", "percent": "80%" }];
    const softSkills = [{ "skill": "Problem Solving", "percent": "80%" }, { "skill": "Spoken English", "percent": "90%" }, { "skill": "Attention to Details", "percent": "85%" }];

    const [name, setName] = useState('Frontend');
    const [arr, setArr] = useState(frontend);
    const [active, setActive] = useState([1,0,0,0]);

    const handleFrontend = () => {
        setName("Frontend");
        setArr(frontend);
        setActive([1,0,0,0]);
    }

    const handleBackend = () => {
        setName("Backend");
        setArr(backend);
        setActive([0,1,0,0]);
    }

    const handleTools = () => {
        setName("Tools");
        setArr(tools);
        setActive([0,0,1,0]);
    }

    const handleSoftSkills = () => {
        setName("Soft Skills");
        setArr(softSkills);
        setActive([0,0,0,1]);
    }

    return (
        <div className='container Skills-Section mt-5' id='Skills'>
            <h2 className='fw-bolder Technical'>Technical Proficieny</h2>
            <div className="row mt-5">
                <div className='col-lg-6 col-sm-12 my-auto' data-aos="fade-right">
                    <div className='row justify-content-center gap-4'>
                        <div className={`skill-select ${active[0]===1?'Active':''}`} onClick={handleFrontend}>Frontend</div>
                        <div className={`skill-select ${active[1]===1?'Active':''}`} onClick={handleBackend}>Backend</div>
                        <div className={`skill-select ${active[2]===1?'Active':''}`} onClick={handleTools}>Tools</div>
                        <div className={`skill-select ${active[3]===1?'Active':''}`} onClick={handleSoftSkills}>Soft Sills</div>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 Progress-section mx-auto'>
                    <Progress name={name} arr={arr}></Progress>
                </div>
            </div>
        </div>
    )
}

export default Skills