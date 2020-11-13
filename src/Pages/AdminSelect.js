import React from 'react'
import { Button } from 'reactstrap';
import '../App.css'


export default function AdminSelect(props){
    return(
        <div class = "App">
            <header className="App-header">
                <div>
                    <Button className = "button managerButton">Bartender Insights</Button>
                    <Button className = "button managerButton">Inventory Insights</Button>
                </div>
            </header>
        </div>
    )
}