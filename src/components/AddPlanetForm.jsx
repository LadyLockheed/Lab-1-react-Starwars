import React from 'react'

const AddPlanetForm=({handleInputValue, inputName, inputbirthyear, inputhaircolor, inputskincolor, validateMessage})=>{
   

    return (

        <>
        <label>Name</label>
        <input type='text'
        value={inputName}
        onChange={event=>(handleInputValue(event, 'name'))}/>
        <strong className='validate-message'>{validateMessage}</strong> 
        
        <label>Climate</label>
        <input type='text'
         value={inputbirthyear} 
        onChange={event=>(handleInputValue(event, 'year'))}/>
        
        <label>Terrain</label>
        <input type='text'
        value={inputhaircolor}   
        onChange={event=>(handleInputValue(event, 'haircolor'))}/>
        
        <label>Gravity</label>
        <input type='text'
        value={inputskincolor} 
        onChange={event=>(handleInputValue(event, 'skincolor'))}/>
        </>
    )

}

export default AddPlanetForm