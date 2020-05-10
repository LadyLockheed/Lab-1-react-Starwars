import React from 'react'

const FavoritePlanets=({favorites, handleRemove})=>{
    let imageClassName=null;
    let jsxPlanetFav=favorites.filter(item=> item.terrain!==undefined).map(planet=>{

    if(planet.created!=='by-me'){
        imageClassName='image-globe'
    }
    else{
        imageClassName='image-user'
    }

    return (<div key={planet.name}  className='card'>
    
        <div className='top-wrapper'> 
            <h2>{planet.name}</h2>  
            <div className={imageClassName}></div>     
        </div>
       
        <p>Climate: {planet.climate}</p>
        <p>Terrain: {planet.terrain}</p>
        <p>Gravity: {planet.gravity}</p>

        <button className="card-button" onClick={()=>handleRemove(planet)}>Ta bort ur favoriter</button>
    </div>)
   })

    return (

        <div className='peoplefav'>

                {jsxPlanetFav}

        </div>
    )

}

export default FavoritePlanets