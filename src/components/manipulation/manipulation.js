import React from 'react'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './manipulation.css'

function Manipulation (props) {

    const addElement = () =>{
        props.addElementToTable()
    }

    const options = [
        {label:"Income",
        value:"income"
    },
        {label:"Expense",value:"expense"}
      ];
      const defaultOption = options[0];
    return (
        <div className="manipulation-zone">
              <Dropdown  className="dropdown" options={options}  value={defaultOption} placeholder="Select an option" />
              <input type="text" placeholder="Description" />
              <input type="text" placeholder="Value" />
              <input type="submit" value="Submit"  onClick = {addElement}/>
        </div>
    )
}

export default Manipulation