import React  from 'react'
import './HeaderStyle.css'


const Header=({displayPage, setDisplayPage})=>{

    let searchNav='nav-not-active';
    let addNav='nav-not-active';
    let favoritesNav='nav-not-active';

    if(displayPage==='SEARCH'){
        searchNav='nav-active'
    }
    else if(displayPage==='ADD'){
        addNav='nav-active'
    }
    else if(displayPage==='FAVORITES'){
        favoritesNav='nav-active'
    }

       function handlePageToggle(page){

        if (page==='SEARCH'){
            setDisplayPage(page)
            

        }else if (page==='ADD'){
            setDisplayPage(page)
           
        }
        else if(page==='FAVORITES'){
            setDisplayPage('FAVORITES')
           
        }
        else if(page==='WELCOME'){
            setDisplayPage('WELCOME')
            
        }
    }
    


    return (

        <header>

        {/* <p className="headerLogo" onClick={()=>setDisplayPage('WELCOME')}>Star Wars</p>

        <nav className="navbar">
            <p onClick={()=>setDisplayPage('SEARCH')}>Search</p>
            <p onClick={()=>setDisplayPage('ADD')}>Add favorite</p>
            <p onClick={()=>setDisplayPage('FAVORITES')}>Favorites</p>
        </nav> */}


        <p className="headerLogo" onClick={()=>handlePageToggle('WELCOME')}>Star Wars</p>

        <nav className="navbar">
            <p className={searchNav} onClick={()=>handlePageToggle('SEARCH')}>Info</p>
            <p className={addNav} onClick={()=>handlePageToggle('ADD')}>Create character</p>
            <p className={favoritesNav} onClick={()=>handlePageToggle('FAVORITES')}>Favorites</p>
        </nav>

        </header>
    )

}

export default Header