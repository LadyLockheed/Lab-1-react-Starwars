import React, {useState} from 'react'
import './AddOwnCharacterStyle.css'

const AddOwnCharacter=({favorites, setFavorites})=>{

    const [validateMessage, setVadlidateMessage]=useState('')
    const [subMsgClassName, setSubMsgClassName]=useState('not-submitted')

    //TODO Ändra inputstates så de inte heter birthyear osv, utan funkar för både people och planet
    const [inputName, setInputName]=useState('')
    const [inputbirthyear, setbirthyear]=useState('')
    const [inputhaircolor, sethaircolor]=useState('')
    const [inputskincolor, setskincolor]=useState('')


    //ny karaktär läggs in  i detta objektet
    let character={ 
        name:inputName,
        birth_year:inputbirthyear,
        hair_color:inputhaircolor,
        skin_color:inputskincolor,
        created:'by-me',
        favorite:true
    }

    //tar hand om det som skrivits i inputfälten
    const handleInputValue=(event, inputField)=>{

        setSubMsgClassName('not-submitted')

        if (inputField==='name'){
            setInputName(event.target.value)  
        }
        else if (inputField==='year'){
            setbirthyear(event.target.value)
        }
        else if (inputField==='haircolor'){
            sethaircolor(event.target.value)
        }
        else if (inputField==='skincolor'){
            setskincolor(event.target.value)
        }
           
    }

    let submitMessage='Added new character you have. May the force be with you.'
    const handleSubmit=()=>{

        if (favorites.some(person=>person.name===character.name)){
           setVadlidateMessage('Den här karaktären finns redan')
        }
        else if(character.name===''){
           setVadlidateMessage('Skriv in ett namn tack')  
        }
        else{
            let addNewChar=[...favorites, character]
            setFavorites(addNewChar)
            setVadlidateMessage('')
            setSubMsgClassName('submitted')
            setInputName('')
            setbirthyear('')
            sethaircolor('')
            setskincolor('')
        }
    }

    
    return (
      
        <div className='wrapper'>

        <div className='formImage'></div>

            <div className='formContainer'>
                <h2>Add your own favorite</h2>

                <form className='add-form'>
                   

                    <label>Name</label>
                    <input type='text' id="fName"
                    value={inputName}
                    onChange={event=>(handleInputValue(event, 'name'))}/>
                    <strong className='validate-message'>{validateMessage}</strong> 
                    
                    <label>Birthyear</label>
                    <input type='number' id="hWorld"
                     value={inputbirthyear} 
                    onChange={event=>(handleInputValue(event, 'year'))}/>
                    
                    <label>Haircolor</label>
                    <input type='text' id="haircolor"
                    value={inputhaircolor}   
                    onChange={event=>(handleInputValue(event, 'haircolor'))}/>
                    
                    <label>Skincolor</label>
                    <input type='text' id="skincolor"
                    value={inputskincolor} 
                    onChange={event=>(handleInputValue(event, 'skincolor'))}/>

                    {/* <label>Name</label>
                    <input type='text' id="fName"
                    onChange={event=>(handleInputValue(event, 'name'))}/>
                    <strong className='validate-message'>{validateMessage}</strong> 
                    
                    <label>Birthyear</label>
                    <input type='number' id="hWorld" 
                    onChange={event=>(handleInputValue(event, 'year'))}/>
                    
                    <label>Haircolor</label>
                    <input type='text' id="haircolor"  
                    onChange={event=>(handleInputValue(event, 'haircolor'))}/>
                    
                    <label>Skincolor</label>
                    <input type='text' id="skincolor"
                    onChange={event=>(handleInputValue(event, 'skincolor'))}/> */}

                </form>

                <button className='submit-button' onClick={handleSubmit}>Use the force!</button>
                <h3 className={subMsgClassName}>{submitMessage}</h3>

            </div>
    </div>

    )
}

export default AddOwnCharacter
