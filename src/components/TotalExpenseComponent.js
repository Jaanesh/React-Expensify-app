import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux' ;

export const TotalExpenseComponent= (props)=>{
    return(
        <div>
             {props.noOfExpenses<=0?<h2>There are no expenses available</h2> 
                                     :<h2>There are {props.noOfExpenses} expenses available and its total is 
                                 {numeral(props.totalAmount/100).format('$0,0.00')}     </h2> }            
        </div>
    );
}



const mapStateToProps=(state)=>{
    return {
           noOfExpenses:state.expenses.length,
           totalAmount:(state.expenses.length<=0)? 0 :state.expenses.reduce((total=0,currentExpense)=>{
                                                  return total=total+currentExpense.amount ;
                                               },0)
        }      
    };


export default connect(mapStateToProps)(TotalExpenseComponent);