
import ReactDOM from 'react-dom';
import React, {useState, useEffect} from "react";
export default function Home(props) {
    useEffect(() => {
       console.log("Hello World")
       props.setUsername("John Smith")
    }, [])
    return(
        <div>
            <h1>Hi {props.username}!</h1>
        </div>
    )
}
