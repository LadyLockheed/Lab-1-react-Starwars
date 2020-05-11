import React from 'react'

const AddPeopleForm=({handleInputValue, inputName, inputParam1, inputParam2, inputParam3, validateMessage})=>{
  
 

    return (

        <>
        <label>Name</label>
        <input type='text' id="fName"
        value={inputName}
        onChange={event=>(handleInputValue(event, 'name'))}/>
        <strong className='validate-message'>{validateMessage}</strong> 
        
        <label>Birthyear</label>
        <input type='number' id="hWorld"
         value={inputParam1} 
        onChange={event=>(handleInputValue(event, 'year'))}/>
        
        <label>Haircolor</label>
        <input type='text' id="haircolor"
        value={inputParam2}   
        onChange={event=>(handleInputValue(event, 'haircolor'))}/>
        
        <label>Skincolor</label>
        <input type='text' id="skincolor"
        value={inputParam3} 
        onChange={event=>(handleInputValue(event, 'skincolor'))}/>
        </>
    )

}

export default AddPeopleForm