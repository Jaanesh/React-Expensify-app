import React from 'react';
import {connect} from 'react-redux' ;
import {NavLink} from 'react-router-dom';
import {removeExpense} from '../actions/expense';

//dispatch is coming from parent
/*
   <td><button onClick={(event)=>{
                 console.log("Remove id="+id);
                 dispatch(removeExpense(id));
            }}>Remove</button></td>
*/

//export default ({dispatch,id,description,amount,createdAt}={})=>(  

export default ({id,description,amount,createdAt}={})=>(    
        <tr>
            <td><NavLink to={`/edit/${id}`} >{description}</NavLink></td>
            <td>{amount}</td>
            <td>{createdAt}</td>         
        </tr>    
);

//export default ExpenseItem;

/*
const mapStateToProps=(state)=>{
    return {
        expenses:state.expenses
    }
}
*/

//export default connect()(ExpenseItem);

