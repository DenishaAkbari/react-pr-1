import '../ComC/btn'
import Btn from '../ComC/btn';
const Nav = () => {

    return (    
        <div className="header">
        <div className="container">
            <div className="row align-item-center">
                <div className="main-nav" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <nav>
                    <ul>
                        <li className="dropdown">
                            <a href="#">Home</a>  
                            <div className="dropdown-menu">
                                <ul>
                                    <li>
                                        <a href="#">Home 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Home 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Home 3</a>
                                    </li>
                                    <li>
                                        <a href="#">Home 4</a>
                                    </li>
                                </ul>
                            </div> 
                        </li>
                        <li className="dropdown">    
                            <a href="#">Courses</a>
                            <div className="dropdown-menu">
                                <ul>
                                    <li>
                                         <a href="#">Courses</a>
                                    </li>
                                    <li>
                                        <a href="#">Courses details</a>
                                    </li>
                                    <li>
                                        <a href="#">Courses category</a>
                                   </li>
                                   <li>
                                       <a href="#">Mentors</a>
                                   </li>
                                   <li>
                                    <a href="#">Mentors details</a>
                                   </li>
                                </ul>
                            </div> 
                        </li>
                        <li  className="dropdown">
                            <a href="#">Blogs</a>
                            <div className="dropdown-menu">
                                <ul>
                                    <li>
                                            <a href="#">Blogs</a>
                                    </li>
                                    <li>
                                        <a href="#">Blogs2</a>
                                    </li>
                                    <li>
                                        <a href="#">Details</a>
                                    </li>
                                </ul>
                            </div> 
                        </li>
                        <li  className="dropdown">
                            <a href="#">Pages</a>
                            <div className="dropdown-menu">
                                <ul>
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="#">Cart</a>
                                    </li>
                                    <li>
                                        <a href="#">Chek out</a>
                                    </li>
                                    <li>
                                        <a href="#">Sign up</a>
                                    </li>
                                    <li>
                                        <a href="#">sign in</a>
                                    </li>
                                    <li>
                                        <a href="#">Reset Password</a>
                                    </li>
                                    <li>
                                        <a href="#">404 Error</a>
                                    </li>

                                </ul>
                            </div> 
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                < Btn />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Nav;