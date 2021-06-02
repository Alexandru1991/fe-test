import React from 'react'
import Header from './components/header/header.js'
import './App.css';
import Tables from './components/tables/tables.js';
import Manipulation from './components/manipulation/manipulation.js';
import dataSet from './assets/ExpensesAndIncomes.json'

function App() {
  const AddElementToTable = () => {

  }
  return (
    <div className="App">
      <Header Income={dataSet.incomes} Expense = {dataSet.expenses}/>
      <Manipulation addElementToTable={AddElementToTable}/>
      <Tables className='tables'/>
    </div>
  );
}

export default App;
