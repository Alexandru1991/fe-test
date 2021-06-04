import React  from 'react'

import {useEffect, useState } from "react"
import './header.scss'
function Header (props) {
   
    const dataItemsIncomes= props.Income;
    const dataItemsExpenses = props.Expense;

    const[totalIncome, setTotalIncome] = useState(0)
    const[totalExpense, setTotalExpense] = useState(0)



    
    useEffect(() => {  
        let total = 0;
        dataItemsIncomes.forEach((el)=>{
            total=total+el.value;

        })
        setTotalIncome(total)
 } ,[dataItemsIncomes] )  
 
     
 useEffect(() => {  
    let total = 0;
    dataItemsExpenses.forEach((el)=>{
        total=total+el.value;

    })
    setTotalExpense(total)
} ,[dataItemsExpenses] ) 
   


    
    return (
        <div className = 'jumboHeader'>
                <h3>Available budget in June 2020</h3>
                <h1>+ {totalIncome-totalExpense}$</h1>
                <div className="income">Income +{totalIncome}</div>
                <div className="expense">Expenses -{totalExpense}</div>
                <div></div>
        </div>
    )
}

export default Header