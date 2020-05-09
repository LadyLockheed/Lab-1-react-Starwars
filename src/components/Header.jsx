import React  from 'react'
import './HeaderStyle.css'


const Header=({displayPage, setDisplayPage})=>{

//if currentpAge=favorites
//gör det här:
//let favorites=active

  
    // function handlePageToggle(page){

    //     if (displayPage==='SEARCH'){
    //         setDisplayPage(page)
    //         searchNav='active'

    //     }else if (displayPage==='ADD'){
    //         setDisplayPage(page)
    //         addNav='active'
    //     }
    //     else if(displayPage==='FAVORITES'){
    //         setDisplayPage('FAVORITES')
    //         favoritesNav='active'
    //     }
    //     else if( displayPage==='WELCOME'){
    //         setDisplayPage('WELCOME')
            
    //     }
    // }
    let searchNav='not-active';
    let addNav='not-active';
    let favoritesNav='not-active';

    if(displayPage==='SEARCH'){
        searchNav='active'
    }
    else if(displayPage==='ADD'){
        addNav='active'
    }
    else if(displayPage==='FAVORITES'){
        favoritesNav='active'
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
            <p className={addNav} onClick={()=>handlePageToggle('ADD')}>Add favorite</p>
            <p className={favoritesNav} onClick={()=>handlePageToggle('FAVORITES')}>Favorites</p>
        </nav>

        </header>
    )

}

export default Header