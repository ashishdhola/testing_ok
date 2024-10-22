import { Link } from 'react-router-dom';
import './header.css'
import { IoSearchOutline } from "react-icons/io5";



function Header() {
    return (
        <>
            <header>
                <div className="header-top">

                    <div className="container">
                        <div className="header-top-wrap">
                            <div className="row">
                                <div className="col-9">
                                    <div className="logo">
                                        <Link className='logo-link'>
                                            <img src="./src/images/BookMyShow_logo.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className="searchBox">
                                        <div className="searchBox-wrap">
                                            <span>
                                                <IoSearchOutline />
                                            </span>
                                            <span>
                                                Search for Movies, Events, Plays, Sports and Activities
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="cities">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width:"100%",padding:"0px"}}>
                <div className="header-bottom">
                    <div className='header-bottom-wrap'>
                        <div className='entertainment-section'>
                            <div className="col-9">
                                <div className='entertainment-links'>
                                    <Link>movies</Link>
                                    <Link>stream</Link>
                                    <Link>events</Link>
                                    <Link>plays</Link>
                                    <Link>sports</Link>
                                    <Link>activities</Link>
                                </div>
                            </div>
                            <div className="col-end">
                                <div className='entertainment-links'>
                                    <Link>listYourShow</Link>
                                    <Link>corporates</Link>
                                    <Link>offers</Link>
                                    <Link>gift cards</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </header>
        </>
    )
}

export default Header