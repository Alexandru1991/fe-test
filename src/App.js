import React, {useState} from 'react'
import Header from './components/header/header.js'
import './App.css';
import Tables from './components/tables/tables.js';
import Manipulation from './components/manipulation/manipulation.js';
import dataSet from './assets/ExpensesAndIncomes.json'

function App() {
  const dataSetIncomesLength = dataSet.incomes.length;
  const dataSetExpensesLength = dataSet.expenses.length;
  const [manipulatedObj,setManipulatedObj] = useState(dataSet)
  const [dropdown,setDropdown] = useState(dataSet)

  const updateObj = (newObjectUsed) => {
    let updatedObj = dataSet;
    if (dropdown==="income"){
      updatedObj.incomes = [...dataSet.incomes, newObjectUsed];
      
    }
    else
    {
      updatedObj.expenses =  [...dataSet.expenses, newObjectUsed];

    }
    
    setManipulatedObj(updatedObj)
      
  }
  
  
  const Dropdown = (value) => {
    setDropdown(value);
  }

  console.log(Dropdown);
  return (
    <div className="App">
      <Header Income={manipulatedObj.incomes} Expense = {manipulatedObj.expenses}/>
      <Manipulation dataSetExpensesLength= {dataSetExpensesLength} dataSetIncomesLength = {dataSetIncomesLength}  updateObj={updateObj} dropdown = {Dropdown}/>
      <Tables updateObj={manipulatedObj} className='tables'/>
    </div>
  );
}

export default App;
