import React from 'react'
import dataSet from '../../assets/ExpensesAndIncomes.json'
import Expenses from './expenses/expenses'
import Incomes from './incomes/incomes'


function Tables (props) {

    return (
        <div className="tables">
              <Incomes IncomesData= {dataSet.incomes} />
              <Expenses ExpenseData= {dataSet.expenses}/>
        </div>
    )
}

export default Tables