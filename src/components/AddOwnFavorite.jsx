import React, {useState} from 'react'
import AddCharacterForm from './AddCharacterForm'
import AddPlanetForm from './AddPlanetForm'
import './AddOwnFavoriteStyle.css'

const AddOwnFavorite=({favorites, setFavorites})=>{

    const [category, setCategory]=useState('character')
    let currentCategoryForm=null;
    switch(category){
  
        case 'character':
        currentCategoryForm=<AddCharacterForm favorites={favorites} setFavorites={setFavorites}/>

            break;
        case 'planet':
            currentCategoryForm=<AddPlanetForm favorites={favorites} setFavorites={setFavorites}/>
            
            break;
        default:
            currentCategoryForm=<AddCharacterForm favorites={favorites} setFavorites={setFavorites}/>
              
    }
 

    return(

        <div className='wrapper'>
  
            <div className='formImage'></div>
  
            <div className='formContainer'>
            
                <h2>Add your own {category}</h2>
                

                <form className='add-form'>

                    <div className='category-container'>

                        <label className='label-for-category'>Add character</label>
                        <input type='radio' className='radio' name='category' value={category} onClick={()=>setCategory('character')}/>
                        
                        <label className='label-for-category' >Add planet</label>
                        <input type='radio' className='radio' name='category' value={category} onClick={()=>setCategory('planet')}/>
                
                    </div>

                    {currentCategoryForm}
        
                </form>

                
            </div>
      </div>

    )
}

export default AddOwnFavorite