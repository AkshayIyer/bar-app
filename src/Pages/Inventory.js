
import ReactDOM from 'react-dom';
import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
export default function Inventory(props) {
    return(
        <div className="Inventory">
        <Button className = "HelpButton"> ? </Button>
        <Link to = "/admin">
            <Button className = "BackAdminButton">Back to Statistics</Button>
        </Link>
        <h1 class = "Table_Text"> Bartender Insights </h1>
        <p class = "Pouring_Targets"> Pouring targets: 75%</p>
        <p class = "Overpouring_Average"> Overpouring average: 50%</p>
        <Button className = "filterButton">Filters: 3/16/2018; Shift(9AM-12PM);...</Button>
        <Table className = "Table-header">
        <colgroup>
          <col class = "green"/>
        </colgroup>
        <thead>
            <tr>
            <th>Employee Name</th>
            <th>Amount Poured(L)</th>
            <th>Amount Required(L)</th>
            <th>Overpoured(L)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            
            <td>John Doe</td>
            <td>9</td>
            <td>6</td>
            <td>3</td>
            </tr>
            
            
            <tr>
            <td>Jane Doe</td>
            <td>7</td>
            <td>6</td>
            <td>1</td>
            </tr>

            <tr>
            <td>Toph Beifong</td>
            <td>12</td>
            <td>7</td>
            <td>5</td>
            </tr>

            <tr>
            <td>Katara</td>
            <td>10</td>
            <td>10</td>
            <td>0</td>
            </tr>
            
            <tr>
            <td>Zuko</td>
            <td>11</td>
            <td>9</td>
            <td>2</td>
            </tr>

            <tr>
            <td>Aang</td>
            <td>6</td>
            <td>4</td>
            <td>2</td>
            </tr>

            <tr>
            <td>Sokka</td>
            <td>13</td>
            <td>10</td>
            <td>3</td>
            </tr>

            <tr>
            <td>Suki</td>
            <td>8</td>
            <td>7</td>
            <td>1</td>
            </tr>


        </tbody>
        </Table>
        
        </div>
    )
}