function Header() {
    return (
        <>
            <header className="fixed-header">
                <div className="main-bar">
                    <div className="container">
                        {/* <!-- logo --> */}
                        <div className="logo">
                            <a href="index.html" className="pan-lid">
                                <img src="./images/logo.png" alt="" />
                            </a>
                        </div>
                        {/* <!-- Toogle Button --> */}
                        <button className="toogle-btn">
                            <span className="bar1"></span>
                            <span className="bar2"></span>
                            <span className="bar3"></span>
                        </button>
                        {/* <!-- right nav bar--> */}
                        <div className="right-nav">
                            <ul className="right-nav-wrap">
                                <li className="user-login">
                                    <a href="#">
                                        <img src="./images/user.png" alt="" />
                                    </a>
                                </li>
                                <li className="cart">
                                    <a href="#">
                                        <img src="./images/bag.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Main nav bar --> */}
                        <div className="main-nav">
                            <div className="logo-header">
                                <a href="index.html" className="pan-lid">
                                    <img src="./images/logo.png" alt="" />
                                </a>
                            </div>
                            <ul className="nav-list">
                                {/* <!-- 1 --> */}
                                <li className="nav-list-item">
                                    <a href="javascript:void(0);" className="active menu">Home</a>
                                    <ul className="home-sub">
                                        <li><a href="javascript:void(0);">Home 01</a></li>
                                        <li><a href="javascript:void(0);">Home 02</a></li>
                                        <li><a href="javascript:void(0);">Home 03</a></li>
                                    </ul>
                                </li>
                                {/* <!-- 2 --> */}
                                <li className="nav-list-item">
                                    <a href="javascript:void(0);" className="menu">Pages</a>
                                </li>
                                {/* <!-- 3 --> */}
                                <li className="nav-list-item">
                                    <a href="javascript:void(0);" className="menu">Shop</a>
                                </li>
                                {/* <!-- 4 --> */}
                                <li className="nav-list-item">
                                    <a href="javascript:void(0);" className="menu">Blogs</a>
                                </li>
                                {/* <!-- 5 --> */}
                                <li className="nav-list-item">
                                    <a href="javascript:void(0);" className="menu">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;
