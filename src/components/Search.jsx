import React from 'react'

const Search=({peopleData, planetsData})=>{

    
   
console.log(peopleData)
console.log(planetsData)



    // let jsxListPeople=peopleData.map((element)=>

    //     <div key={element.name}>
    //         <p>Name: {element.name}</p>
    //         <p>Birthyear: {element.birth_year}</p>
    //         <p>Haircolor: {element.hair_color}</p>
    //         <p>Skincolor: {element.skin_color}</p>
    //         <button>Lägg till i favoriter</button>
    //     </div>
    // )

    let jsxListPlanets=planetsData.map((planet)=>

    <div key={planet.name}>
        <p>Name: {planet.name}</p>
        <p>Climate: {planet.climate}</p>
        <p>Terrain: {planet.terrain}</p>
        <button>Lägg till i favoriter</button>
    </div>
)


    return(

        <div>

            <button>People</button>
            <button>Planets</button>

            {/* {jsxListPeople} */}
            {jsxListPlanets}

        </div>
    )


}

export default Search