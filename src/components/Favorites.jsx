import React, {useState} from 'react'
import './FavoritesStyle.css'

const Favorites=({favorites, setFavorites})=>{
  
    const [displayList, setDisplayList]=useState('ALL')

    const handleRemove=itemToRemove=>{
        itemToRemove.favorite=false;
        setFavorites(favorites.filter(item=>item !==itemToRemove))
    }
    //variabler för vilken knapp som är aktiv
    let favAllButton='fav-not-active';
    let favPeopleButton='fav-not-active';
    let favPlanetsButton='fav-not-active';
    //variabler för att styra vilken lista som ska användas i .map funktionen
    let currentList=null;
    let jsxListPeople=favorites.filter(item=>item.birth_year!==undefined)
    let jsxListPlanets=favorites.filter(item=>item.birth_year===undefined)
     //variabler för att styra vilken text som ska renderas beroende på people/planets
     let imageClassName=null;
     let category1=null
     let category2=null
     let category3=null
     let categoryItem1=null
     let categoryItem2=null
     let categoryItem3=null
    
    switch(displayList){

        case 'ALL':
            currentList=favorites
            favAllButton='fav-active'
        break;
        case 'PEOPLE':
            currentList=jsxListPeople
            favPeopleButton='fav-active'
        break;
        case 'PLANETS':
            currentList=jsxListPlanets
            favPlanetsButton='fav-active'
        break;
        default:
           console.log('Sidan finns ej')
           currentList=favorites
           favAllButton='fav-active'

    }

    let jsxList=currentList.map((item)=>{

        if(item.created!=='by-me'){
            imageClassName='image-globe'
        }
        else{
            imageClassName='image-user'
        }
        if (item.terrain!==undefined){
            category1='Climate: '
            category2='Terrain: '
            category3='Gravity: '
            categoryItem1=item.climate
            categoryItem2=item.terrain
            categoryItem3=item.gravity
        }
        else{
            category1='Birthyear: '
            category2='Haircolor: '
            category3='Skincolor: '
            categoryItem1=item.birth_year
            categoryItem2=item.hair_color
            categoryItem3=item.skin_color
        }
        return (<div key={item.name}  className='card'>
        
            <div className='top-wrapper'> 
                <h2>{item.name}</h2>  
                <div className={imageClassName}></div>     
            </div>
           
            <p>{category1} {categoryItem1}</p>
            <p>{category2} {categoryItem2}</p>
            <p>{category3} {categoryItem3}</p>
    
            <button className="card-button" onClick={()=>handleRemove(item)}>Ta bort ur favoriter</button>
        </div>)
 
    })//slut jsxList
    
    return(
        <div>
            <div className='button-container-favorites'>
                <button className={favAllButton} onClick={()=>setDisplayList('ALL')}>All</button>
                <button className={favPeopleButton} onClick={()=>setDisplayList('PEOPLE')}>People</button>
                <button className={favPlanetsButton} onClick={()=>setDisplayList('PLANETS')}>Planets</button>
            </div>
            
            <div className='grid-container-favorites'>
                {jsxList}

            </div>

        </div>
  
    )
}

export default Favorites