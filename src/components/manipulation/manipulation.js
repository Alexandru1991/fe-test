import React, {useState} from 'react'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './manipulation.scss'

function Manipulation (props) {
    const [dropdown,setDropdown] = useState('income');
    const [description, setDescription] = useState();
    const [value,setValue] = useState();
 
    const handleSubmit = (e) => {
        e.preventDefault();
        
      

        const newObj2 = {}
        if (dropdown==='income')
        {
            newObj2.id = props.dataSetIncomesLength
        }
        else newObj2.id = props.dataSetExpensesLength
        
        newObj2.description = description;
        newObj2.value = value;
        

       props.updateObj(newObj2)
       props.dropdown(dropdown);
    }

    const options = [
        {label:"Income",
        value:"income"
         },
        {label:"Expense",
        value:"expense"}
      ];
      
    return (
        <form onSubmit={handleSubmit} className="manipulation-zone">
              <Dropdown  className="dropdown" options={options}   placeholder="Select an option" onChange = {e => setDropdown(e.value)} />
              <input type="text" placeholder="Description" onChange = {e => setDescription(e.target.value)} />
              <input type="number" placeholder="Value" onChange = {e => setValue(parseInt(e.target.value))}/>
              <input type="submit" value="Submit" />
        </form>
    )
}

export default Manipulation