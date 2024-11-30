import React from 'react'
import logo from '../../assets/aifer-logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className="navbar shadow-sm">
                <div className="container-fluid px-md-5">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Aifer" className="d-inline-block align-text-top brand" />
                    </a>
                    <div className='ms-auto'>
                        <button className="join-btn">Start now</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
