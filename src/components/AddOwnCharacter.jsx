import React from 'react'
import './AddOwnCharacterStyle.css'

const AddOwnCharacter=({favorites, setFavorites})=>{

    let character={ 
        name:'',
        birth_year:'',
        hair_color:'',
        skin_color:'',
        created:'by-me'

    }

    const handleInputValue=(event, inputField)=>{

        if (inputField==='name'){
            character.name=event.target.value;
        }
        else if (inputField==='year'){
            character.birth_year=event.target.value;
        }
        else if (inputField==='haircolor'){
            character.hair_color=event.target.value;
        }
        else if (inputField==='skincolor'){
            character.skin_color=event.target.value;
        }

    }

    const handleSubmit=()=>{

        let addNewChar=[...favorites, character]
        setFavorites(addNewChar)

    }

    return (
      
        <div className='wrapper'>

        <div className='formImage'></div>

        <div className='formContainer'>
            <h2>Add your own favorite</h2>

            <form>

                <label>Name</label>
                <input type='text' id="fName" 
                onChange={event=>(handleInputValue(event, 'name'))}/>
                
                <label>Birthyear</label>
                <input type='number' id="hWorld" 
                onChange={event=>(handleInputValue(event, 'year'))} />

                <label>Haircolor</label>
                <input type='text' id="haircolor"  
                onChange={event=>(handleInputValue(event, 'haircolor'))}/>

                <label>Skincolor</label>
                <input type='text' id="skincolor"
                onChange={event=>(handleInputValue(event, 'skincolor'))}/>

            </form>

            <button className='submit-button' onClick={handleSubmit}>Use the force!</button>
        </div>
    </div>




    )
}

export default AddOwnCharacter
