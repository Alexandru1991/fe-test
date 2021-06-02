
import React from 'react' 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './expenses.css';
function Expense(props){
   
    const Items = props.ExpenseData;
   
    const dataItems = Items.map((el)=>{

        
        return (<TableRow>
            <TableCell>{el.description}</TableCell>
            <TableCell className="cell-value">+{el.value}$</TableCell>
            </TableRow>)
    })
   
   
   return (
    <TableContainer className='expenseTable' component={Paper}>
    <Table  aria-label="simple table">
       <TableHead>
           <TableRow>
               <TableCell className="title">EXPENSE</TableCell>
           </TableRow>
       </TableHead>
       <TableBody>
       {dataItems}
       </TableBody>
   
   </Table>
</TableContainer>   
    )
   
    
}
export default Expense;