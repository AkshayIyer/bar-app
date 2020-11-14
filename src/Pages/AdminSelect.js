import React from 'react'
import { Button } from 'reactstrap';
import '../App.css'
import { Link } from 'react-router-dom'


export default function AdminSelect(props){
    return(
        <div class = "App">
            <header className="App-header">
                <div>
                    <Link to = "/inventory">
                        <Button className = "button managerButton">Bartender Insights</Button>
                    </Link>

                    <Link to = "/drinks">
                        <Button className = "button managerButton">Inventory Insights</Button>
                    </Link>
                </div>
            </header>
        </div>
    )
}