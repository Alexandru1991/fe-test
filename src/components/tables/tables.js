import React from 'react'

import Expenses from './expenses/expenses'
import Incomes from './incomes/incomes'


function Tables (props) {
    const tables = props.updateObj
    console.log(tables);
    return (
        <div className="tables">
              <Incomes IncomesData= {tables.incomes} />
              <Expenses ExpenseData= {tables.expenses}/>
        </div>
    )
}

export default Tables