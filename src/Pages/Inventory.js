
import ReactDOM from 'react-dom';
import React, {useState, useEffect} from "react";

import Table from 'react-bootstrap/Table'

export default function Inventory(props) {
    return(
        <div className="Inventory">
        <h1> Table </h1>

        
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
            
        </tbody>
        </Table>
        
        </div>
    )
}