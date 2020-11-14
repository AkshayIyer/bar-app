import React from 'react'
import { Button } from 'reactstrap';
import '../App.css'
import { Link } from 'react-router-dom'


export default function AdminSelect(props){
    return(
        <div class = "App">
            <Button className = "HelpButton"> ? </Button>
            <Link to = "/">
                <Button className = "BackAdminButton">Logout</Button>
            </Link>
            <header className="App-header">
                <h1>Statistics</h1>
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