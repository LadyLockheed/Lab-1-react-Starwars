import React, {useState} from 'react'
import './FavoritesStyle.css'

const Favorites=({favorites, setFavorites})=>{



     // let newList = oldList.filter(x => x.id !== idToRemove);
    const [displayList, setDisplayList]=useState('ALL')

    //TODO funktion som visar från vald kategori. Tex, favorites.filter
    //TODO Se till så man inte kan lägga till samma objekt en gång till. 
    // efter ifsatser som sätter vilken bild det ska vara, där kanske man kan sätta ytterligare ifsatser med return, om item.terrain inte finns, då är det ett peopleobbjekt, då ska den sortera fram people och visa den jsxlistan med name birthyear osv
    //om item.terrain finns då är det planets, då ska den sortera fram planets och visa terrain, climate och sånt stuff.

  
    //Tar bort cards ur listan
    const handleRemove=item=>setFavorites(favorites.filter(people=>people !==item))

    let jsxList=favorites.map((item)=>{

        let cardClassName=null;  
        let imageClassName=null; 

        if(item.created!=='by-me'){ 
            cardClassName='card'
            imageClassName='image-globe'
        }
        else{
            cardClassName=item.created
            imageClassName='image-user'
        }
       
            //If sat. If statedisplayLIst (state som jag måste skapa)=='PLANET' som skickas från planetknappen använd då den här returnen.
            //if statISDisplayed =='people som skickas från peopleknappen, då ska använda den andra returnen som jag inte skapat än. 
            //if inget av det är valt, setDisplay till ALL. Det som visas från början.
            //? Hur gör för listan med alla? För att kunna skriva ut det statiska BirthYear/terrain osv.
            // if(displayList==='ALL')
        return <div key={item.name}  className={cardClassName}>
        
                <div className='top-wrapper'> 
                    <h2>{item.name}</h2>  
                    <div className={imageClassName}></div>     
                </div>
               
                <p>Birthyear: {item.birth_year}</p>
                <p>Haircolor: {item.hair_color}</p>
                <p>Skincolor: {item.skin_color}</p>
        
                <button className="card-button" onClick={()=>handleRemove(item)}>Ta bort ur favoriter</button>
            </div>
    

    })
   

    return(
        <div>
        <div className='button-container-favorites'>
            <button onClick={()=>setDisplayList('ALL')}>All</button>
            <button onClick={()=>setDisplayList('PEOPLE')}>People</button>
            <button onClick={()=>setDisplayList('PLANETS')}>Planets</button>
        </div>
           
            <div className='grid-container-favorites'>
                {jsxList}

            </div>

        </div>
  
    )
}

export default Favorites