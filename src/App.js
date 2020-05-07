import React, {useState, useEffect} from 'react';
// import Header from './components/Header'
// import Search from './components/Search'
// import Info from './components/Info'

import './App.css';

function App() {

  const[peopleData, setPeopleData]=useState([])
  const[planetsData, setPlanetsData]=useState([])

  async function getData(){
 
    let baseUrl='https://swapi.dev/api/'
    let category='people'
    //Loop som först hämtar people, sen hämtar planets
    for (let i=0; i<=1; i++){

      let data=[]
   
      let responseFirstPage= await fetch(baseUrl+category)
      let resultFirstPage=await responseFirstPage.json()
      //lägger in resultatet på tom datalist
      resultFirstPage.results.forEach(element=>data.push(element))

      let next=resultFirstPage.next
      let pageNumber=2;
      while (next!=null){
         
          let response=await fetch (baseUrl+category+'/?page='+pageNumber)
          let result=await response.json()

          result.results.forEach(element=>data.push(element))
          pageNumber++
  
          next=result.next
      }
        if(category==='people'){
          setPeopleData(data)
        }
        else{
          setPlanetsData(data)
        }
        category='planets'
    } 
}

useEffect(()=>{
  
  getData();

    



},[]) 

useEffect(()=>{
  console.log('PeopleData: ', peopleData)
        console.log('PlanetData: ', planetsData)
})

  return (
    <div className="App">


      {/* <Header/> */}

      {/* Välkomsttext
      <button>>Go</button> */}



      <button onClick={()=>getData('people')}>People</button>
      <button onClick={()=>getData('planets')}>Planets</button>

      {/* <Search/> */}

      

    </div>
  );
}//slut app

export default App;



