import React, {useState} from 'react'
import './AddOwnFavoriteStyle.css'

const AddCharacterForm=({favorites, setFavorites})=>{
   
   
    const [name, setName]=useState('')
    const [birthYear, setBirthYear]=useState('')
    const [era, setEra]=useState('')
    const [hairColor, setHairColor]=useState('')
    const [skinColor, setSkinColor]=useState('')

    const [nameIsTouched, setNameIsTouched]=useState(false)
    const [birthYearIsTouched, setBirthYearIsTouched]=useState(false)
    const [hairColorIsTouched, setHairColorIsTouched]=useState(false)
    const [skinColorIsTouched, setSkinColorIsTouched]=useState(false)

    const [subMsgClassName, setSubMsgClassName]=useState('not-submitted')
   

    let submitMessage='Character added. May the force be with you.'
    let filteredPeople=favorites.filter(item=>item.birth_year !==undefined)
    let invalidButton=true
    
    //För att validera alla inputfält
    let [validName, nameValidMessage] = nameIsValid(name, filteredPeople);
    let [validBirthYear, birthYearValidMessage] = birthYearIsValid(birthYear);
    let [validHairColor, hairColorValidMessage] = hairColorIsValid(hairColor);
    let [validSkinColor, skinColorValidMessage] = skinColorIsValid(skinColor);
    
    //Kollar om alla inputfält är validerade och ok.
    let isValid=checkIfAllIsValid(validName, validBirthYear, validHairColor, validSkinColor)
    let validEra=true
    let eraValidMessage=''
    
    //Om allt är validerat och ok, låses knappen upp
    if (isValid){
        invalidButton=false;
    }


    // const timeoutFunc=()=>{
    //     setSubMsgClassName('not-submitted')
    //     return ()=>{
    //         clearTimeout();
    //     }

    // }

    const handleSubmit=(e)=>{
         //förhindrar att sidan laddas om när man trycker på knappen inuti Form taggen
         //Man behöver inte ha en form tag
        e.preventDefault();

        let newCharacter={ 
            name:name,
            birth_year:birthYear+era,
            hair_color:hairColor,
            skin_color:skinColor,
            created:'by-me',
            favorite:true
        }
        //lägger till nytt objekt till listan. Skriver ut sucessmeddelande.
        let newCharAddedList=[...favorites, newCharacter]
        setFavorites(newCharAddedList)
        setSubMsgClassName('submitted')
       
        setName('')
        setHairColor('')
        setBirthYear('')
        setSkinColor('')
        setNameIsTouched(false)
        setHairColorIsTouched(false)
        setBirthYearIsTouched(false)
        setSkinColorIsTouched(false)
       
        // setTimeout(timeoutFunc, 3000)

    }
    
   

    return (    

        <>
            <label>Name</label>
            <input type='text' id="fName"
            value={name}
            className={!validName && nameIsTouched ? 'invalid' : ''}
            onBlur={()=>setNameIsTouched(true)}
            onChange={event=>setName(event.target.value)}/>
            <strong className='invalid-message'>{nameValidMessage}</strong>
         
            <label>Birth year</label>
            <input type='number' id="bday"
            value={birthYear}
            className={!validBirthYear && birthYearIsTouched ? 'invalid' : ''}
            onBlur={()=>setBirthYearIsTouched(true)} 
            onChange={event=>setBirthYear(event.target.value)}/>
            <strong className='invalid-message'>{birthYearValidMessage}</strong>
          
            <div className='wrapper-era'>
    
                <label className='label-era'>BBY</label>
                <input type='radio' name='swYear'
                className={!validEra ?  'invalid' : 'input-era'}
                value={era}
                onClick={()=>setEra('BBY')}/>
            
                <label className='label-era'>ABY</label>
                <input type='radio' name='swYear'
                className={!validEra ? 'invalid' : 'input-era'}
                value={era}
                onClick={()=>setEra('ABY')}/>
                <strong className='invalid-message'>{eraValidMessage}</strong>
            
    
            </div>
    
            <label>Hair color</label>
            <input type='text' id="haircolor"
            value={hairColor}
            className={!validHairColor && hairColorIsTouched ? 'invalid' : ''}
            onBlur={()=>setHairColorIsTouched(true)}     
            onChange={event=>setHairColor(event.target.value)}/>
            <strong className='invalid-message'>{hairColorValidMessage}</strong>
          
          
            <label>Skin color</label>
            <input type='text' id="skincolor"
            value={skinColor}
            className={!validSkinColor && skinColorIsTouched ? 'invalid' : ''}
            onBlur={()=>setSkinColorIsTouched(true)}   
            onChange={event=>setSkinColor(event.target.value)}/>
            <strong className='invalid-message'>{skinColorValidMessage}</strong>

            <button className='submit-button' onClick={event=>handleSubmit(event)} disabled={invalidButton}>Use the force!</button>
            <h3 className={subMsgClassName}>{submitMessage}</h3>
            
          
        </>
        )
     

}

export default AddCharacterForm



//kollar om man fyllt i mer än noll i inputfälten
const nameIsValid=(name, filteredPeople)=>{

    if(filteredPeople.some(person=>person.name===name)){
        return [false, 'Character with this name already exist']
        //TODO Hur kollar jag om namnet redan finns? Helst nere i funktionen NameisValid. OM den är där nere kommer felmeddelande när jag lagt till den nya karaktären eftersom den ju kollar mot favorites om den finns där, vilket den ju gör eftersom jag precis lagt till den. Vilket mer villkor måste till?
    }
    if (name.length < 1){
        return [false, 'Need to write a name']
    }
    else{
        return [true, '']
    }

}
const birthYearIsValid=(birthYear)=>{

    if( birthYear.length < 1 ) {
        return [false, 'Need to write a birthday and pick BBY/ABY'];
    } else {
        
        return [true, ''];
    }
}
const hairColorIsValid=(hairColor)=>{

    if( hairColor.length < 1 ) {

        return [false, 'Need to write a haircolor'];

    } else {
        
        return [true, ''];
    }

}
const skinColorIsValid=(skinColor)=>{

    if( skinColor.length < 1 ) {

        return [false, 'Need to write a skincolor'];

    } else {
        
        return [true, ''];
    }

}
//kollar om alla är ok
const checkIfAllIsValid=(name, birthyear, haircolor,skincolor)=>{

    if (name===true && birthyear===true && haircolor===true && skincolor===true){
        return true
    }
    else{
        return false
    }
}