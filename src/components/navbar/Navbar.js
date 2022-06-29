import React , {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {
const [click , setClick] = useState(false)
const HandleClick = () => setClick(!click);


  return ( 
    <>
     <div className="navbar">
        <div className="container">
            <h1>
                <span><BsFillHouseFill/>Real</span>Estate
            </h1>
            <button className="btn">Sign In</button>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Search Property</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="hamburger" onClick={HandleClick}>
                {click ?( <FaRegTimesCircle className="icon" /> ):(<HiOutlineMenuAlt4 className="icon" />)}
            </div>
        </div>
     </div>
    </>
  )
}

export default Navbar