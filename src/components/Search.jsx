import React, {useState} from 'react'
import './SearchStyle.css'

const Search=({peopleData, planetsData, favorites, setFavorites})=>{

   const [category, setCategory]=useState('PEOPLE')
   const [searchParams, setSearchParams]=useState('')

   //lägger till favoriter till lista
    function handleAddToFavorites(newItem){

        if(favorites.some(item=>item.name===newItem.name)){
            newItem.favorite=false;
            setFavorites(favorites.filter(item=>item !==newItem))
        }
        else{
            newItem.favorite=true
            let newFavorite=[...favorites, newItem]
            setFavorites(newFavorite)
        }
      
    } 

    let cardButtonCss=null
    

    //Renderar listan people utifrån om och vad man skrivit i searchrutan
    let jsxListPeople=peopleData.filter(person=>
        person.name.toLowerCase().includes(searchParams.toLowerCase()) 
    ||  person.hair_color.toLowerCase().includes(searchParams.toLowerCase()) 
    ||  person.birth_year.toLowerCase().includes(searchParams.toLowerCase())
    ||  person.skin_color.toLowerCase().includes(searchParams.toLowerCase())
    ).map((person)=>{

        //ändrar likeknappen beroende på om objektet är favorit eller ej
        if (person.favorite===true){
            // buttonDisabled=true;
            cardButtonCss='favorite'
        }
        else{
            // buttonDisabled=false;
            cardButtonCss='no-favorite'
        }

        return(
            <div key={person.name}  className='card'>
                <h2 className={person.gender}>{person.name}</h2>
                <p>Birth year: {person.birth_year}</p>
                <p>Hair color: {person.hair_color}</p>
                <p>Skin color: {person.skin_color}</p>
                <div className={cardButtonCss} onClick={()=>handleAddToFavorites(person)} ></div>
            </div>)
    
    })

    //Renderar listan planets utifrån om och vad man skrivit i searchrutan
    let jsxListPlanets=planetsData.filter(planet=>
        planet.name.toLowerCase().includes(searchParams.toLowerCase())
    ||  planet.climate.toLowerCase().includes(searchParams.toLowerCase())
    ||  planet.terrain.toLowerCase().includes(searchParams.toLowerCase()) 
    ||  planet.gravity.toLowerCase().includes(searchParams.toLowerCase()) 
    ).map((planet)=>{

         //ändrar likeknappen beroende på om objektet är favorit eller ej
         if (planet.favorite===true){
            
            cardButtonCss='favorite'
        }
        else{
           
            cardButtonCss='no-favorite'
        }

        return (
            <div key={planet.name}  className='card'>
                <h2>{planet.name}</h2>
                <p>Climate: {planet.climate}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Gravity: {planet.gravity}</p>
                <div className={cardButtonCss} onClick={()=>handleAddToFavorites(planet)} ></div>
            </div>)
    })  

    //variabler som styr classnamn för kategoriknappar
    let currentCategory=null;
    let peoplebutton='not-active'
    let planetsbutton='not-active'

    //vilken lista ska vara synlig styrs här
    switch(category){

        case 'PEOPLE':
            currentCategory=jsxListPeople
            peoplebutton='active'

            break;

        case 'PLANETS':
            currentCategory=jsxListPlanets
            planetsbutton='active'
            break;

        default:
            console.log('Sidan hittas ej')

    }
    //det som renderas på sidan
    return(

        <div className='search-comp'>
            <div className='buttons-container'>
                <button className={peoplebutton} onClick={()=> setCategory('PEOPLE')}>People</button>
                <button className={planetsbutton} onClick={()=> setCategory('PLANETS')}>Planets</button>
            </div>
            <div className='input-container'>
                <div className='image-container'>
                    <div className='search-image'></div>
                </div>
                
                <input className="searchfield" type='text' 
                    placeholder='Search and you will find....' 
                    value={searchParams}
                    onChange={e=>setSearchParams(e.target.value)}/>

            </div>
    
                
                    <div className='grid-container'>
                        {currentCategory}
                    </div>

        </div>
    )
}

export default Search