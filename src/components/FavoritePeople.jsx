import React from 'react'

const FavoritePeople=({favorites, handleRemove})=>{
    let imageClassName=null;
   let jsxPeopleFav=favorites.filter(item=> item.birth_year!==undefined).map(person=>{

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

    return (

        <div className='peoplefav'>

                {jsxPeopleFav}

        </div>
    )

}

export default FavoritePeople