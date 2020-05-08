import React, {useState} from 'react'
import './SearchStyle.css'

const Search=({peopleData, planetsData})=>{
    // console.log(planetsData)
    // console.log(peopleData)
    
   const [category, setCategory]=useState('PEOPLE')
   const [searchParams, setSearchParams]=useState('')

   
//    function handleInputValue(e){
//        console.log('inputvalue: ', e.target.value)

//         if (e.target.value ==='male'){
//             console.log('i male')
//             setSearchParams('male')    
//         }
//         else{
//             console.log('i övrigt')
//             setSearchParams(e.target.value)
//         }
//    }

 

    let jsxListPeople=peopleData.filter(person=>
        person.name.toLowerCase().includes(searchParams.toLowerCase()) 
    ||  person.hair_color.toLowerCase().includes(searchParams.toLowerCase()) 
    ||  person.birth_year.toLowerCase().includes(searchParams.toLowerCase())
    ||  person.gender.toLowerCase().includes(searchParams.toLowerCase())
    ).map((person)=>
        <div key={person.name}  className='card'>
            <h2 className={person.gender}>{person.name}</h2>
            <p>Gender: {person.gender}</p>
            <p>Birthyear: {person.birth_year}</p>
            <p>Haircolor: {person.hair_color}</p>
            <p>Skincolor: {person.skin_color}</p>
            <button>Lägg till i favoriter</button>
        </div>
    
    )

    let jsxListPlanets=planetsData.filter(planet=>
        planet.name.toLowerCase().includes(searchParams.toLowerCase())
    ||  planet.climate.toLowerCase().includes(searchParams.toLowerCase())
    ||  planet.terrain.toLowerCase().includes(searchParams.toLowerCase()) 
    ).map((planet)=>

        <div key={planet.name}  className='card'>
            <h2 className={planet.terrain}>Name: {planet.name}</h2>
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

        {/* till funktionen för att få fram male eller female */}
            {/* <input type='text' 
            placeholder='search and you will find' 
            value={searchParams}
            onChange={e=>handleInputValue(e)}
            /> */}

            <input type='text' 
            placeholder='search and you will find' 
            value={searchParams}
            onChange={e=>setSearchParams(e.target.value)}
            />
 
            <a id="top">'</a>
                <div className='gridContainer'>
                    {currentCategory}
                    <a href="#top">
                        <button className='to-the-top'>To the top</button>
                    </a>

                </div>

        </div>
    )


}

export default Search