import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import React, {useState, useEffect} from "react"

function App() {
  const [username, setUsername] = React.useState("Bob");
  return ( 
    //<Home username = {username} setUsername = {setUsername}/>
     <div className="App">
      <header className="App-header">
        <h1> BarIQ </h1>

        <button class = "button managerButton">Register as Bar Manager</button>
        <button class = "button bartenderButton">Register as Bartender</button>
        <button class = "button loginButton"> Log In </button>

        
      </header>
    </div>
  );
}

export default App;


