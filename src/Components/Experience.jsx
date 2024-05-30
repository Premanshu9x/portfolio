import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Experience = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Change the threshold as needed
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial check for screen width
        handleResize();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='container text-white mt-5 px-4 Work' id='Projects'>
            <div className='position-relative'>
                <h2 className='fw-bolder '>Work Experience</h2>
            </div>
            <div className="slider-container text-center mt-5">
                <Slider {...settings}>
                    <div className='experience text-start'>
                        <h4 className=''>FilmFinder: Your Ultimate Movie Companion</h4>
                        <div className='d-flex align-items-center justify-content-between'>
                            <span><h6 className='mt-2'>January 2024-February 2024</h6></span>
                            <span><a href="https://movie-hub-two-jet.vercel.app/" target="_blank">Live</a></span>
                        </div>
                        <ul className='mt-2'>
                            <li>Website showcasing movie details with API integration for trending movies, TV series, and search functionality.</li>
                            <li>Features today's and weekly trending movies, providing users with up-to-date information.</li>
                            <li>Allows users to explore a comprehensive list of movies and TV series.</li>
                            <li>Developed using HTML, CSS, Bootstrap, and ReactJS to deliver a dynamic and interactive user experience.</li>
                        </ul>
                    </div>
                    <div className='experience text-start'>
                        <h4>Full stack Hotel Booking App</h4>
                        <h6 className='mt-2'>April 2023-June 2023</h6>
                        <ul className='mt-4'>
                            <li>Full stack Hotel Booking App with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express, and MongoDB.</li>
                            <li>Allows users to explore available hotels, select stay duration, and book accommodations seamlessly.</li>
                            <li>Features location-based search functionality for convenient hotel selection.</li>
                            <li>Offers a dynamic and intuitive user interface for effortless hotel booking and management.</li>
                        </ul>
                    </div>
                    <div className='experience text-start'>
                        <h4>Junior Web Developer at Code Clause</h4>
                        <div className='d-flex align-items-center justify-content-between'>
                            {isMobile ? (
                                <span><h6 className='mt-2'>Sept 2023-Oct 2023</h6></span>
                            ) : (
                                <span><h6 className='mt-2'>September 2023-October 2023</h6></span>
                            )}

                            <span><a href="pdfs/clause.pdf" download="Code Clause.pdf">Certificate</a></span>
                        </div>

                        <ul className='mt-2'>
                            <li>Junior Web Developer Intern specializing in frontend technologies: HTML, CSS, JavaScript, and React.</li>
                            <li>Contributed to frontend development tasks, including UI design, layout implementation, and interactivity.</li>
                            <li>Engaged in HTML structure creation, CSS styling, and JavaScript logic to enhance user experiences.</li>
                            <li>Leveraged React framework to build dynamic and responsive web interfaces, gaining practical experience in modern frontend development.</li>
                        </ul>
                    </div>
                    <div className='experience text-start'>
                        <h4>Persistent Martian Program 2023</h4>
                        <div className='d-flex align-items-center justify-content-between'>
                            {isMobile ? (
                                <span><h6 className='mt-2'>Nov 2023-Jan 2024</h6></span>
                            ) : (
                                <span><h6 className='mt-2'>November 2023-January 2024</h6></span>
                            )}

                            <span><a href="pdfs/persistent.pdf" download="Persistent.pdf">Certificate</a></span>
                        </div>

                        <ul className='mt-2'>
                            <li>Participated in the 2023 Persistent Martian Program, focusing on Data Structures and Algorithms, SQL, and Python.</li>
                            <li>Acquired practical experience in implementing various data structures and algorithms.</li>
                            <li>Demonstrated proficiency through quiz participation and achieved a commendable rank.</li>
                            <li>Gained hands-on experience in SQL for data management and manipulation, enhancing analytical skills.</li>
                        </ul>
                    </div>

                </Slider >
            </div>
        </div>
    )
}

export default Experience