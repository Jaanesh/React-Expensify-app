import React from 'react';
import {connect} from 'react-redux' ;
import {addExpense} from '../actions/expense.js';
import ExpenseForm from './ExpenseFormComponent';

/*
//props got he dispatch event due to 'connect'
const createExpenseComponentTemplate=(props)=>(
    <div>
        <h2>This is createExpenseTemplate</h2>
        <br/>
        <h2>Add New Expense</h2>
        <br/>
        <ExpenseForm
             onSubmit={(newExpense)=>{
                 console.log(newExpense);
                 props.dispatch(addExpense(newExpense));
                 props.history.push('/');
             }}></ExpenseForm>
    </div>

);

export default connect()(createExpenseComponentTemplate);
*/

export class CreateExpenseComponentTemplate extends React.Component{
   
    onSubmit=(newExpense)=>{
        console.log(newExpense);
        this.props.onSubmit(newExpense);
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
            <h2>This is createExpenseTemplate</h2>
            <br/>
            <h2>Add New Expense</h2>
            <br/>
            <ExpenseForm onSubmit={this.onSubmit} ></ExpenseForm>
        </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
     return{
        onSubmit:(newExpense)=>dispatch(addExpense(newExpense))
     }
}

export default connect(undefined,mapDispatchToProps)(CreateExpenseComponentTemplate);