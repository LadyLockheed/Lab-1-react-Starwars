import React, {useState} from 'react'
import './AddOwnCharacterStyle.css'

const AddOwnCharacter=({favorites, setFavorites})=>{

    const [validateMessage, setVadlidateMessage]=useState('')
    const [subMsgClassName, setSubMskClassName]=useState('not-submitted')
 
    //ny karaktär läggs in  i detta objektet
    let character={ 
        name:'',
        birth_year:'unknown',
        hair_color:'unknown',
        skin_color:'unknown',
        created:'by-me'

    }

    //tar hand om det som skrivits i inputfälten
    const handleInputValue=(event, inputField)=>{

        setSubMskClassName('not-submitted')

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

   
    let submitMessage='Added new character you have. May the force be with you.'
    const handleSubmit=()=>{

        if (favorites.some(person=>person.name===character.name)){
           setVadlidateMessage('Den här karaktären finns redan')
        }
        else if(character.name==''){
           
           setVadlidateMessage('Skriv in ett namn tack')
            
        }
        else{
           
            let addNewChar=[...favorites, character]
            setFavorites(addNewChar)
            setVadlidateMessage('')
            setSubMskClassName('submitted')

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
                    onChange={event=>(handleInputValue(event, 'skincolor'))}/>

                </form>

                <button className='submit-button' onClick={handleSubmit}>Use the force!</button>
                <h3 className={subMsgClassName}>{submitMessage}</h3>
                
             
            
            </div>
    </div>




    )
}

export default AddOwnCharacter
