import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const countriesInfo = {
    name: ['Bangladesh', 'Sweden', 'UK', 'USA'],
    city: ['Dhaka', 'Stockholm', 'London', 'Washington']
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My React Project</h1>
        <CountryCount></CountryCount>
        <Country name={countriesInfo.name[0]} city={countriesInfo.city[0]}></Country>
        <Country name="Sweden" city="Stockholm"></Country>
        <Country name={countriesInfo.name[2]} city={countriesInfo.city[2]}></Country>
        <Country name="USA" city="Washington"></Country>
        {/* <Country name="Bangladesh" city="Dhaka"></Country>
        <Country name="Sweden" city="Stockholm"></Country>
        <Country name="UK" city="London"></Country>
        <Country name="USA" city="Washington"></Country> */}
  
        <Users></Users>
        {/* <UsersPhoto></UsersPhoto> */}
      </header>
    </div>
  );
}

function CountryCount(){
  const [count, setCount] = useState(0);
  const isIncreased = () =>{
    const newCount = count + 1;
    setCount(newCount);
  }

  // Minimizing the code of isDecreased function 
  // const isDecreased = () =>{
    //   const lessCount = count -1;
    //   setCount(lessCount);
    // }
  
  return(
    <div>
      <button onClick={isIncreased}>Add country</button>
      <button onClick={() =>setCount(count-1)}>Remove country</button>
      <h3>Number of countries: {count}</h3>
      <VisitedCountries visits = {count}></VisitedCountries> 
      <VisitedCountries visits = {count + 7}></VisitedCountries>
      <VisitedCountries visits = {count +10}></VisitedCountries>
      <VisitedCountries visits = {count}></VisitedCountries>
    </div>
  )
}

// component <VisitedCountries>
function VisitedCountries(props){
  return <h4>Number of visited countries: {props.visits} </h4>
}
function Country(props){
  console.log(props);
  const designStyle1 = {
    border: '2px solid blue',
    padding: '10px',
    width: '300px',
    margin: '5px',
    boxShadow: '5px 5px 10px red',
    borderRadius: '20px',
    float: 'left'
  }
  return (
    <div style={designStyle1}>
      <h3>Country: {props.name}</h3>
      <h5>Capital: {props.city}</h5>
    </div>
  )
}
function Users() {
  const designStyle = {
    border: '2px solid blue',
    padding: '10px',
    // width: '300px',
  }
  const [ users, setUsers ] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  }, []);
  return (
    <div style= {designStyle}>
      {
        console.log(users)
      }
      <h3>Get Users Info.: {users.length} </h3>
      <ul>
        {users.map(info=> <li>Key= {info.id}, Name: {(info.name)}, Email: {info.email}, Phone: {info.phone}</li>)}
      </ul>
    </div>
  );
}

// function UsersPhoto(){

//   const [users, setUsers] = useState([]);
//   useEffect (()=>{
//     fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(res => res.json())
//     .then(data => setUsers(data))
//   })
//   return (
//     <div>
//       <h2>Photo of users: {users.length}</h2>
//       <ul>
//         {
//           users.map(photos => <li>{photos.id}: {photos.title}</li>)
//         }
//       </ul>
//     </div>
//   )
// }
export default App;
