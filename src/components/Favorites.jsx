import React from 'react'
import './FavoritesStyle.css'

const Favorites=({favorites})=>{


//TODO använd forEach och lägg på cardClassName person.created


    // let jsxList=favorites.map((person)=>

    // <div key={person.name}  className='card'>
    //     <h2 className={person.created}>{person.name}</h2>
    //     <p>Birthyear: {person.birth_year}</p>
    //     <p>Haircolor: {person.hair_color}</p>
    //     <p>Skincolor: {person.skin_color}</p>
        
    //     <button>Ta bort ur favoriter</button>
    // </div>
    
    // )

    let jsxList=favorites.map((person)=>{

        let cardClassName=null;  
        let imageClassName=null; 

        if(person.created!=='by-me'){
            
            cardClassName='card'
            imageClassName='image-globe'
        }
        else{
            cardClassName=person.created
            imageClassName='image-user'
        }
    console.log('cardClassName är: ', cardClassName)

     return <div key={person.name}  className={cardClassName}>
        
                <div className='top-wrapper'> 
                    <h2>{person.name}</h2>  
                    <div className={imageClassName}></div>     
                </div>
               
                <p>Birthyear: {person.birth_year}</p>
                <p>Haircolor: {person.hair_color}</p>
                <p>Skincolor: {person.skin_color}</p>
        
                <button className="card-button">Ta bort ur favoriter</button>
            </div>
    

    }

    )


    return(
        <div className='grid-container-favorites'>
            {jsxList}

        </div>
    )
}

export default Favorites