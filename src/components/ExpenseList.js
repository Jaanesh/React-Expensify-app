import React from 'react';
import {connect} from 'react-redux' ;
import listFilteredExpenses from '../selectors/Expenses';
import ExpenseItem from './ExpenseListItemComponent';
import ExpenseListFilterComponent from './ExpenseListFilterComponent';


export const ExpenseList=(props)=>{

   // let filteredExpenses=listFilteredExpenses(props.expenses,props.filters);

    return (
    <div>
        <ExpenseListFilterComponent></ExpenseListFilterComponent>
        <p>Expense List</p>
        <table>
       
            <tbody>
            <tr>
               <th>description</th>
               <th>amount</th> 
               <th>createdAt</th>
           </tr>
           {
               
         /*   filteredExpenses.map((eachExpense,index)=>{
                                 return (<ExpenseItem key={eachExpense.id} {...eachExpense}></ExpenseItem>);
                               }
            )*/
            props.expenses.map((eachExpense,index)=>{                                  
                                return (<ExpenseItem key={eachExpense.id} {...eachExpense}></ExpenseItem>);
                              }  )          
                         }
            </tbody>
        
       </table>
       

    </div>
)};

/*const ConnectedExpenseListComponent=connect((state)=>{
    return {
        expenses:state.expenses
    }
})(ExpenseList);

export default ConnectedExpenseListComponent;
*/

const mapStateToProps=(state)=>{
  /*  return {
        expenses:state.expenses,
        filters:state.filters
    }*/

   return{
        //list the expenses based on filter 
        expenses:listFilteredExpenses(state.expenses,state.filters)
    }
   
}

export default connect(mapStateToProps)(ExpenseList);

