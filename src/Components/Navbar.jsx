import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand " href="#">PORTFOLIO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <i class="fa-solid fa-bars-staggered"></i>
                </button>
                <div className="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 gap-3 pe-3">
                            <li className="nav-item">
                                <a className="nav-link Abutton" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Abutton" href="#Skills">SKILLS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Abutton" href="#Projects">PROJECTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link Abutton" href="#Contact">CONTACT</a>
                            </li>
                            <li className="nav-item d-flex ">
                                <a className="nav-link nav-button" href="#">HIRE ME</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar