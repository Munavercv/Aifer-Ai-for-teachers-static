import React from 'react'
import './Footer.css'
import whiteLogo from '../../assets/aifer_logo_white.svg'

const Footer = () => {
    return (
        <div className='container-fluid my-3'>
            <div className="footer">
                <footer className="py-3 px-5">
                    <div className="row">
                        <div className="col-md-4 mb-1 brand-side me-xl-5">
                            <a href="/" className="d-flex align-items-center mb-5 ms-3 link-dark text-decoration-none">
                                <img className='logo' src={whiteLogo} alt="Aifer" />
                            </a>

                            <h5>Follow Aifer</h5>
                            <p className='mb-3'>Follow Aifer Education for offers, course notifications and many more on our social media accounts.</p>

                            <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mb-0 social-icons">
                                <ul className="list-unstyled d-flex">
                                    <li className="me-4"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li className="me-4"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li className="me-4"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li className="me-4"><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                </ul>
                            </div>

                        </div>



                        <div className="col-md-2 mb-1 mt-4 ms-lg-5 quick-links">
                            <h5 className='mb-3'>About Aifer</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Mentors</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Success Stories</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Contact Us</a></li>
                                <li className="nav-item"><a href="#" className="nav-link p-0 text-white">Careers</a></li>
                            </ul>
                        </div>

                        <div className="col-md-2 mb-1 mt-4 quick-links">
                            <h5 className='mb-3'>Top Courses</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">UGC NET Coaching</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">MPhil Clinical Psycology</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">PsyBridge</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Free Basic Course</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">E-Book</a></li>
                                <li className="nav-item"><a href="#" className="nav-link p-0 text-white">Free Study Materials</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-1 mt-4 quick-links">
                            <h5 className='mb-3'>Contact with us</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Aifer Education Pvt Ltd-</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">13/564 B,Cherukara Building,Kuttikkattoor PO,Kozhikode 673008</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">+91 9339100300</a></li>
                                <li className="nav-item"><a href="#" className="nav-link p-0 text-white">education@aifer.in</a></li>
                            </ul>
                        </div>
                    </div>

                    <hr className='mb-1' />

                    {/* <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"> */}
                    <div className="d-flex flex-column align-items-center text-center mb-2 footer-bottom">
                        <p className="d-flex gap-2 justify-content-center mb-4">
                            <a className="text-white" href="#">*Terms of services</a>
                            <a className="text-white" href="#">*Privacy Policy</a>
                            <a className="text-white" href="#">*Contact Us</a>
                        </p>
                        <p className="mb-0">© Aifer Education 2024. All Rights Reserved.</p>
                    </div>

                </footer>
            </div>
        </div>

    )
}

export default Footer
