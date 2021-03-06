import React, {useState, useEffect} from 'react';
import AddOwnFavorite from './components/AddOwnFavorite'
import Header from './components/Header'
import Search from './components/Search'
import Favorites from './components/Favorites'
import './App.css';



function App() {

  let developObject=[{name:'Minion',birth_year:'22bc',hair_color:'black',skin_color:'yellow', created:'nåt datum'}, {name:'E.T', birth_year:'1982', hair_color:'none', skin_color:'brown', created:'by-me'},{name:'Earth', terrain:'everything', climate:'warm and cold', gravity:'lagom'}]

  const[peopleData, setPeopleData]=useState([])
  const[planetsData, setPlanetsData]=useState([])
  const[displayPage, setDisplayPage]=useState('WELCOME')
  const[favorites, setFavorites]=useState(developObject)
  

  let currentPage=null;
  let welcomeText=null;

  switch(displayPage){

    case 'WELCOME':
      welcomeText=(<div className="welcome-text">The information <br/> you want,<br/> we have.</div>)
      break;

    case 'SEARCH':
      currentPage= <Search peopleData={peopleData} planetsData={planetsData} favorites={favorites} setFavorites={setFavorites}/>
      break;
    
    case 'ADD':
      currentPage=<AddOwnFavorite favorites={favorites} setFavorites={setFavorites}/>
      break;
   
    case 'FAVORITES':
      currentPage=<Favorites favorites={favorites} setFavorites={setFavorites}/>
      break;

    default:
      console.log('sidan finns ej')


  }



  //hämtar data från API
  async function getData(){
 
    let baseUrl='https://swapi.dev/api/'
    let category='people'
    //Loop som först hämtar people, sen hämtar planets
    for (let i=0; i<=1; i++){

      let data=[]

      //hämtar första pagen med 10 st people
      let responseFirstPage= await fetch(baseUrl+category);
      let resultFirstPage=await responseFirstPage.json();
    
    
       
      //lägger in ny egenskap: favorite=false
      resultFirstPage.results.forEach(element=>element.favorite=false)
      //lägger in resultatet på tom datalista
      resultFirstPage.results.forEach(element=>data.push(element))

      let next=resultFirstPage.next
     
      let pageNumber=2;

      //loopar igenom restrerande url:er med sidor med people/planets
      while (next!=null){
         
          let response=await fetch (baseUrl+category+'/?page='+pageNumber)
          let result=await response.json();
         

          //lägger in ny egenskap: favorite=false
          resultFirstPage.results.forEach(element=>element.favorite=false)

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
}//slut getpeoplefunc


useEffect(()=>{
  
  getData();

},[])



  return (
    <div className="App">
      <Header displayPage={displayPage} setDisplayPage={setDisplayPage}/>
     {currentPage}
     {welcomeText}
      

    </div>
  );
}//slut app

export default App;



