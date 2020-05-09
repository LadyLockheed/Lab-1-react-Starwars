import React  from 'react'
import './HeaderStyle.css'


const Header=({setDisplayPage})=>{



    // let searchNav='not-active';
    // let addNav='not-active';
    // let favoritesNav='not-active';
   
    
    // function handlePageChoice(page){

    //     if(page==='SEARCH'){
    //         searchNav='active'
    //         setDisplayPage(page)
    //     }
    //     else if(page==='ADD'){
    //         addNav='active'
    //         setDisplayPage(page)
    //     }
    //     else if (page==='FAVORITES'){
    //         favoritesNav='active'
    //         setDisplayPage(page)
    //     }
    //     else if(page==='WELCOME'){
    //         setDisplayPage(page)
    //     }
       
    //     console.log(searchNav)
    // }

    return (

        <header>

        <p className="headerLogo" onClick={()=>setDisplayPage('WELCOME')}>Star Wars</p>

        <nav className="navbar">
            <p onClick={()=>setDisplayPage('SEARCH')}>Info</p>
            <p onClick={()=>setDisplayPage('ADD')}>Add favorite</p>
            <p onClick={()=>setDisplayPage('FAVORITES')}>Favorites</p>
        </nav>


        {/* <p className="headerLogo" onClick={()=>handlePageChoice('WELCOME')}>Star Wars</p>

        <nav className="navbar">
            <p className={searchNav} onClick={()=>handlePageChoice('SEARCH')}>Info</p>
            <p className={addNav} onClick={()=>handlePageChoice('ADD')}>Add favorite</p>
            <p className={favoritesNav} onClick={()=>handlePageChoice('FAVORITES')}>Favorites</p>
        </nav> */}

        </header>
    )

}

export default Header