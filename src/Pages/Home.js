import '../App.css'
import ReactDOM from 'react-dom';
import React, {useState, useEffect} from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
export default function Home(props) {
    return(
        <div className="App">
        <header className="App-header">
        <h1> BarIQ </h1>
            <Link to = "/register">
                <Button onClick = {adminReg} className = "button managerButton">Register as Bar Manager</Button>
            </Link>
            <Link to = "/register">
                <Button onClick = {userReg} className = "button bartenderButton">Register as Bartender</Button>
            </Link>
            <Link to = "/login">
                <Button className = "button loginButton"> Log In </Button> 
            </Link>
        </header>
      </div>
    )
    
    function adminReg(){
        props.handleUserType("admin")
    }

    function userReg(){
        props.handleUserType("user")
    }
}
