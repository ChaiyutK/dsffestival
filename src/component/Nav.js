import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ()=>{
    return(
        <nav>
            <Link to='/Samana'>สัมมนา</Link>
            <Link to='/'>ฉีดวัคซีน</Link>
        </nav>
    )
}

export default Nav