import React from 'react'
import './HeaderStyle.css'


const Header=({setDisplayPage})=>{

    let navClassName=null;
    
    // let function handlePageChoice(){


    // }

    return (

        <header>

        
        <p className="headerLogo" onClick={()=>setDisplayPage('WELCOME')}>Star Wars</p>

        <nav className="navbar">
            <p onClick={()=>setDisplayPage('SEARCH')}>Info</p>
            <p onClick={()=>setDisplayPage('ADD')}>Add favorite</p>
            <p onClick={()=>setDisplayPage('FAVORITES')}>Favorites</p>
        </nav>

        </header>
    )

}

export default Header