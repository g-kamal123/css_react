import React from 'react'
import './App.css'
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <div className='navbar'>
        <div className='logoname'><img className='logo' alt='' src="https://cdn.shortpixel.ai/spai/ret_img/https://www.apptio.com/wp-content/uploads/apptio-logo-svg.svg" /></div>
        <div className='links'>
            <ul>
                <li><Link className='linkss' to="/solutions"><div className='activepurpose'>
                Solutions</div></Link></li>
                <li><Link className='linkss'  to="/products"><div className='activepurpose'>
                Products</div></Link></li>
                <li><Link className='linkss' to="/resources"><div className='activepurpose'>
                Resources</div></Link></li>
                <li><Link className='linkss' to="/company"><div className='activepurpose'>
                Company</div></Link></li>
                <li>
                <Link className='linkss' to="/getstarted">
                <div className='activepurpose' style={{backgroundColor: "#FD8351"}}>
                Get&nbsp;Started</div>
                  </Link>
                  </li>
                <p className='searchcomp'><i class="fa fa-search" aria-hidden="true"/>&nbsp;Search </p>
            </ul>
         
        </div>
    </div>
  )
}

export default Nav