
import ReactDOM from 'react-dom';
import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
export default function Inventory(props) {
    return(
        <div className="Drinks">
        <Button className = "HelpButton"> ? </Button>
        <Link to = "/admin">
            <Button className = "BackAdminButton">Back to Statistics</Button>
        </Link>
        <h1 class = "Table_Text"> Inventory Insights </h1>
        <p class = "Pouring_Targets"> Total Revenue: $379</p>
        <p class = "Overpouring_Average"> Low in Stock: Tanqueray</p>
        <Button className = "filterButton">Filters: Inventory less than 9 L</Button>
        <Table className = "Table-header">
        <colgroup>
          <col class = "green"/>
        </colgroup>
        <thead>
            <tr>
            <th>Drink Name</th>
            <th>Drink Type</th>
            <th>Inventory Amount(L) </th>
            <th>Sales($)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Absolut</td>
            <td>Vodka</td>
            <td>9</td>
            <td>120</td>
            </tr>
            
            
            <tr>
            <td>Captain Morgan</td>
            <td>Rum</td>
            <td>7</td>
            <td>145</td>
            </tr>

            <tr>
            <td>Tanqueray</td>
            <td>Gin</td>
            <td>1</td>
            <td>114</td>
            </tr>

            


        </tbody>
        </Table>
        
        </div>
    )
}