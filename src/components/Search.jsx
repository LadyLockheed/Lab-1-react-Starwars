import React, {useState} from 'react'
import './SearchStyle.css'

const Search=({peopleData, planetsData})=>{
    
   const [category, setCategory]=useState('PEOPLE')
    console.log(peopleData)
    console.log(planetsData)

    let jsxListPeople=peopleData.map((element)=>

        <div key={element.name}  className='card'>
            <h2>Name: {element.name}</h2>
            <p>Birthyear: {element.birth_year}</p>
            <p>Haircolor: {element.hair_color}</p>
            <p>Skincolor: {element.skin_color}</p>
            <button>Lägg till i favoriter</button>
        </div>
    )

    let jsxListPlanets=planetsData.map((planet)=>

        <div key={planet.name}  className='card'>
            <h2>Name: {planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <button>Lägg till i favoriter</button>
        </div>
    )

    let currentCategory=null;

    switch(category){

        case 'PEOPLE':
            currentCategory=jsxListPeople
            break;

        case 'PLANETS':
            currentCategory=jsxListPlanets
            break;

        default:
            console.log('Sidan hittas ej')

    }


    return(

        <div className='search-comp'>

            <button onClick={()=> setCategory('PEOPLE')}>People</button>
            <button onClick={()=> setCategory('PLANETS')}>Planets</button>

                <div className='gridContainer'>
                    {currentCategory}
                </div>

        </div>
    )


}

export default Search