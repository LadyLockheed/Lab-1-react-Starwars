import React, {useState} from 'react'
import './AddOwnCharacterStyle.css'
import AddPeopleForm from './AddPeopleForm'
import AddPlanetForm from './AddPlanetForm'

const AddOwnCharacter=({favorites, setFavorites})=>{

    const [validateMessage, setVadlidateMessage]=useState('')
    const [subMsgClassName, setSubMsgClassName]=useState('not-submitted')
    const [inputCategory, setInputCategory]=useState('PEOPLE')

    //TODO Ändra inputstates så de inte heter birthyear osv, utan funkar för både people och planet
    const [inputName, setInputName]=useState('')
    const [inputParam1, setParam1]=useState('')
    const [inputParam2, setParam2]=useState('')
    const [inputParam3, setParam3]=useState('')

    let currentInputCategory=null

       //tar hand om det som skrivits i inputfälten
       const handleInputValue=(event, inputField)=>{

        setSubMsgClassName('not-submitted')
//TODO setipnutname osv direkt i sökfälten.
        if (inputField==='name'){
            setInputName(event.target.value)  
        }
        else if (inputField==='year'){
            setParam1(event.target.value)
        }
        else if (inputField==='haircolor'){
            setParam2(event.target.value)
        }
        else if (inputField==='skincolor'){
            setParam3(event.target.value)
        }
           
    }

  
    switch(inputCategory){

        case 'PEOPLE':
            currentInputCategory=<AddPeopleForm handleInputValue={handleInputValue} inputParam1={inputParam1} inputName={inputName} inputParam2={inputParam2} inputParam3={inputParam3} validateMessage={validateMessage} />
            break;
        case 'PLANET':
            currentInputCategory= <AddPlanetForm handleInputValue={handleInputValue} inputParam1={inputParam1} inputName={inputName} inputParam2={inputParam2} inputParam3={inputParam3} validateMessage={validateMessage} />
            break;
        default:
            console.log('sidan finns ej')
    }


    //ny karaktär läggs in  i detta objektet
    let character={ 
        name:inputName,
        birth_year:inputParam1,
        hair_color:inputParam2,
        skin_color:inputParam3,
        created:'by-me',
        favorite:true
    }
    let planet={ 
        name:inputName,
        terrain:inputParam1,
        climate:inputParam2,
        gravity:inputParam3,
        created:'by-me',
        favorite:true
    }

 

    let submitMessage='Added new favorite you have. May the force be with you.'
    let addNewChar=null
    const handleSubmit=()=>{
    // Skicka antingen people objektet eller planetobjektet
        if (favorites.some(person=>person.name===character.name)){
           setVadlidateMessage('Den här karaktären finns redan')
        }
        else if(character.name===''){
           setVadlidateMessage('Skriv in ett namn tack')  
        }
        else{

            if(inputCategory==='PEOPLE'){
                addNewChar=[...favorites, character]
            }
            else{
                addNewChar=[...favorites, planet]
            }
            
            setFavorites(addNewChar)
            setVadlidateMessage('')
            setSubMsgClassName('submitted')
            setInputName('')
            setParam1('')
            setParam2('')
            setParam3('')
        }
    }
  

    return (
      
        <div className='wrapper'>

        <div className='formImage'></div>

            <div className='formContainer'>
                <h2>Add your own favorite</h2>

                <form className='add-form'>

            <div className='category-container'>

                <label className='labelforbox'>Add person</label>
                <input type='radio' className='box' name='category' onClick={()=>setInputCategory('PEOPLE')}/>
                
                <label className='labelforbox' >Add planet</label>
                <input type='radio' className='box' name='category' onClick={()=>setInputCategory('PLANET')}/>
          
            </div>

            {currentInputCategory}
         
                </form>

                <button className='submit-button' onClick={handleSubmit}>Use the force!</button>
                <h3 className={subMsgClassName}>{submitMessage}</h3>

            </div>
    </div>

    )
}

export default AddOwnCharacter
