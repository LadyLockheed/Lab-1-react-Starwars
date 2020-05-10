import React, {useState} from 'react'
import './FavoritesStyle.css'

const Favorites=({favorites, setFavorites})=>{

    const [displayList, setDisplayList]=useState('')

    const handleRemove=itemToRemove=>setFavorites(favorites.filter(item=>item !==itemToRemove))
    
    let imageClassName=null;
    //ALLA
    let jsxListAll=favorites.map((item)=>{

        if(item.created!=='by-me'){
            imageClassName='image-globe'
        }
        else{
            imageClassName='image-user'
        }
        return (<div key={item.name}  className='card'>
        
            <div className='top-wrapper'> 
                <h2>{item.name}</h2>  
                <div className={imageClassName}></div>     
            </div>
           
            <p>Birthyear: {item.birth_year}</p>
            <p>Haircolor: {item.hair_color}</p>
            <p>Skincolor: {item.skin_color}</p>
    
            <button className="card-button" onClick={()=>handleRemove(item)}>Ta bort ur favoriter</button>
        </div>)
 
    })//slut jsxListALL
    //PEOPLE
    let jsxListPeople=favorites.filter(item=> item.birth_year!==undefined).map(person=>{

        if(person.created!=='by-me'){
            imageClassName='image-globe'
        }
        else{
            imageClassName='image-user'
        }
    
        return (<div key={person.name}  className='card'>
        
            <div className='top-wrapper'> 
                <h2>{person.name}</h2>  
                <div className={imageClassName}></div>     
            </div>
           
            <p>Birthyear: {person.birth_year}</p>
            <p>Haircolor: {person.hair_color}</p>
            <p>Skincolor: {person.skin_color}</p>
    
            <button className="card-button" onClick={()=>handleRemove(person)}>Ta bort ur favoriter</button>
        </div>)
       })
       //PLANETS
       let jsxListPlanets=favorites.filter(item=> item.terrain!==undefined).map(planet=>{

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


    let currentList=null;

    switch(displayList){

        case 'ALL':
            currentList=jsxListAll
        break;
        case 'PEOPLE':
            currentList=jsxListPeople
        break;
        case 'PLANETS':
            currentList=jsxListPlanets
        break;
        default:
            currentList=jsxListAll

    }

    return(
        <div>
            <div className='button-container-favorites'>
                <button onClick={()=>setDisplayList('ALL')}>All</button>
                <button onClick={()=>setDisplayList('PEOPLE')}>People</button>
                <button onClick={()=>setDisplayList('PLANETS')}>Planets</button>
            </div>
            
            <div className='grid-container-favorites'>
                {currentList}
               

            </div>

        </div>
  
    )
}

export default Favorites