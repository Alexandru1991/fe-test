
import React from 'react' 

import './incomes.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function Incomes(props){
   
    const Items = props.IncomesData;
   
    const dataItems = Items.map((el)=>{

        
        return (
        <TableRow>
                <TableCell>{el.description}</TableCell>
                <TableCell className="cell-value">+{el.value}$</TableCell>
        </TableRow>)
    })
   
   
   return (
    <TableContainer className='incomeTable' component={Paper}>
         <Table  aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className="title">INCOME</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {dataItems}
            </TableBody>
        
        </Table>
    </TableContainer>   
    )
   
    
}
export default Incomes;