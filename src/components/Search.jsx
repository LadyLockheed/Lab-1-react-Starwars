import React, {useState} from 'react'

const Search=()=>{

const [searchParams, setSearchParams]=useState('Sök...')
const handleSearch=event=>{


   setSearchParams(event.target.value)


}
//HÄr ska det ligga ett inputfält
//Skicka in de två listorna , people och plantets
//när man söker ska jag använda .filter
//sen mapas resultatet och renderas i samma sorts element som på vanliga sidan.

    return(

        <div>

           <input type='text' value={searchParams} onChange={event=>handleSearch(event)} onClick={()=>setSearchParams('')}/>

        </div>
    )


}

export default Search