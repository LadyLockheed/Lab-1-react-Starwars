import React from 'react'

const Search=({peopleData, planetsData})=>{
   
console.log(peopleData)
    let jsxListPeople=peopleData.map((element)=>

        <div key={element.name}>
            <p>Name: {element.name}</p>
            <p>Birthyear: {element.birth_year}</p>
            <p>Haircolor: {element.hair_color}</p>
            <p>Skincolor: {element.skin_color}</p>
            <button>Lägg till i favoriter</button>
        </div>
    )


    return(

        <div>

            {jsxListPeople}

        </div>
    )


}

export default Search