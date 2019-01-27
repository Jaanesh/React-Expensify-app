import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseFormComponent';
import {editExpense,removeExpense,startRemoveExpense} from '../actions/expense.js';

/*
const editExpenseComponentTemplate=(props)=>{    
    return(
    <div>
        <h2>Edit the Expense of {props.expenseToBeEdited.id} </h2>
        <br/>
        <ExpenseForm
              expenseToBeEdited={props.expenseToBeEdited}    
              onSubmit={(updatedExpense)=>{
                console.log(updatedExpense);
                props.dispatch(editExpense(props.expenseToBeEdited.id,updatedExpense));
                props.history.push('/');
            }}              
              >
        </ExpenseForm>  

        <br/><br/>
                <button onClick={()=>{
                                         console.log('remove id='+props.expenseToBeEdited.id);
                                         props.dispatch(removeExpense(props.expenseToBeEdited.id));
                                         props.history.push('/');
                                     }} 
                                    >Remove</button> 
    </div>
    )    
};

const mapStateToProps=(state,props)=>{
      return {
          expenseToBeEdited:state.expenses.find((eachExpense)=>{
               // console.log('eachExpense.id='+eachExpense.id);
               // console.log('props.match.params.id='+props.match.params.id);
                 return eachExpense.id===props.match.params.id ;
          })
          //we dont requie filter properties here as we need only existing expenses to edit
          //filters:state.filters
      };
  }
export default connect(mapStateToProps)(editExpenseComponentTemplate);
*/

export class EditExpenseComponentTemplate extends React.Component{

    onSubmit=(updatedExpense)=>{
        console.log(updatedExpense);
        this.props.updateExpense(this.props.expenseToBeEdited.id,updatedExpense);
        this.props.history.push('/');
    }

    onClick=()=>{
        console.log('remove id='+this.props.expenseToBeEdited.id);
        this.props.removeExistingExpense(this.props.expenseToBeEdited.id);
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <h2>Edit the Expense of {this.props.expenseToBeEdited.id} </h2>
                <br/>
                <ExpenseForm
                      expenseToBeEdited={this.props.expenseToBeEdited}    
                      onSubmit={this.onSubmit}              
                      >
                </ExpenseForm>  
        
                <br/><br/>
                        <button onClick={this.onClick}>Remove</button> 
            </div>
            )    
    }
}

const mapStateToProps=(state,props)=>{
    return {
        expenseToBeEdited:state.expenses.find((eachExpense)=>{           
               return eachExpense.id===props.match.params.id ;
        })       
    };
}

const mapDispatchToProps=(dispatch,props)=>{
   // return onSubmit=(newExpense)=>dispatch(addExpense(newExpense));
     return{
        updateExpense:(id,updatedExpense)=>dispatch(editExpense(id,updatedExpense)),
        //removeExistingExpense:(id)=>dispatch(removeExpense(id))
        removeExistingExpense:(id)=>dispatch(startRemoveExpense(id))
        
     }
      
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpenseComponentTemplate);