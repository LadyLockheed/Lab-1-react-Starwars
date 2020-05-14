import React, {useState} from 'react'
import './AddOwnFavoriteStyle.css'

const AddPlanetForm=({favorites, setFavorites})=>{
   
    
    const [name, setName]=useState('')
    const [climate, setClimate]=useState('')
    const [terrain, setTerrain]=useState('')
    const [gravity, setGravity]=useState('')

    const [nameIsTouched, setNameIsTouched]=useState(false)
    const [climateIsTouched, setClimateIsTouched]=useState(false)
    const [terrainIsTouched, setTerrainIsTouched]=useState(false)
    const [gravityIsTouched, setGravityIsTouched]=useState(false)

    const [subMsgClassName, setSubMsgClassName]=useState('not-submitted')

    let submitMessage='Planet added. May the force be with you.'
    let filteredPlanets=favorites.filter(item=>item.terrain !==undefined)
    let invalidButton=true

    //För att validera alla inputfält
    let [validName, nameValidMessage] = nameIsValid(name, filteredPlanets);
    let [validClimate, climateValidMessage] = climateIsValid(climate);
    let [validTerrain, terrainValidMessage] = terrainIsValid(terrain);
    let [validGravity, gravityValidMessage] = gravityIsValid(gravity);

    //Kollar om alla inputfält är validerade och ok.
    let isValid=checkIfAllIsValid(validName, validClimate, validTerrain, validGravity)

    //Om allt är validerat och ok, låses knappen upp
    if (isValid){
      invalidButton=false;
    }
    // const timeoutFunc=()=>{
    //   setSubMsgClassName('not-submitted')
    // }


  const handleSubmit=(e)=>{
      
    //förhindrar att sidan laddas om när man trycker på knappen inuti Form taggen
    e.preventDefault();

        let newPlanet={ 
            name:name,
            climate:climate,
            terrain:terrain,
            gravity:gravity,
            created:'by-me',
            favorite:true
        }

        //lägger till nytt objekt till listan. Skriver ut sucessmeddelande.
        let newPlanetAddedList=[...favorites, newPlanet]
        setFavorites(newPlanetAddedList)
        setSubMsgClassName('submitted')
        setName('')
        setClimate('')
        setTerrain('')
        setGravity('')
        setNameIsTouched(false)
        setClimateIsTouched(false)
        setTerrainIsTouched(false)
        setGravityIsTouched(false)
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
              
              
              <label>Climate</label>
              <input type='text' id="hWorld"
              value={climate}
              className={!validClimate && climateIsTouched ? 'invalid' : ''}
              onBlur={()=>setClimateIsTouched(true)}   
              onChange={event=>setClimate(event.target.value)}/>
                <strong className='invalid-message'>{climateValidMessage}</strong>
          
              <label>Terrain</label>
              <input type='text' id="terrain"
              value={terrain}
              className={!validTerrain && terrainIsTouched ? 'invalid' : ''}
              onBlur={()=>setTerrainIsTouched(true)}     
              onChange={event=>setTerrain(event.target.value)}/>
               <strong className='invalid-message'>{terrainValidMessage}</strong>
              
              <label>Gravity</label>
              <input type='text' id="gravity"
              value={gravity}
              className={!validGravity && gravityIsTouched ? 'invalid' : ''}
              onBlur={()=>setGravityIsTouched(true)}   
              onChange={event=>setGravity(event.target.value)}/>
              <strong className='invalid-message'>{gravityValidMessage}</strong>
             
            <button className='submit-button' onClick={event=>handleSubmit(event)} disabled={invalidButton}>Use the force!</button>
            <h3 className={subMsgClassName}>{submitMessage}</h3>
           
            </>

    )

}

export default AddPlanetForm

const nameIsValid=(name, filteredPlanets)=>{

  if(filteredPlanets.some(planet=>planet.name===name)){
    
      return [false, 'Planet with this name already exist']
  }
  if (name.length < 1){
      return [false, 'Need to write a name']
  }
  else{
      return [true, '']
  }

}
const climateIsValid=(climate)=>{

  if( climate.length < 1 ) {
      return [false, 'Add something about climate'];
  } else {
      
      return [true, ''];
  }
}
const terrainIsValid=(terrain)=>{

  if( terrain.length < 1 ) {

      return [false, 'Add something about terrain'];

  } else {
      
      return [true, ''];
  }

}
const gravityIsValid=(gravity)=>{

  if( gravity.length < 1 ) {

      return [false, 'Add something about gravity'];

  } else {
      
      return [true, ''];
  }

}
const checkIfAllIsValid=(name, climate, terrain,gravity)=>{

  if (name===true && climate===true && terrain===true && gravity===true){
      return true
  }
  else{
      return false
  }
}