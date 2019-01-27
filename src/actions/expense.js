import uuid from 'uuid';
import database from '../firebase/firebase.js';

/* export const addExpense=({description='',note='',amount=0,createdAt=0}={})=>{
    return{
        type:'ADD_EXPENSE',
        expense:{
            id:uuid(),
            description,
            note,
            amount,
            createdAt
        }
    } 
} */

export const addExpense=(expense)=>{
    return{
        type:'ADD_EXPENSE',
        expense
    } 
}

//we are returning a function here.. it cannot be possible without applyMiddleware in redux
export const startAddExpense=(expenseData={})=>{
    return (dispatch)=>{
            const {description='',note='',amount=0,createdAt=0}=expenseData;

            const expense={description,note,amount,createdAt};

            return database.ref('expenses').push(expense).then((ref)=>{
                dispatch(addExpense({
                    id:ref.key,
                    ...expense
                }));
            });
    }
}

export const editExpense=(id,updateObject)=>{
    return{
        type:'EDIT_EXPENSE',
        id,
        updateObject
    }
}

export const removeExpense=(remove_id)=>{
    return{
        type:'REMOVE_EXPENSE',
        id:remove_id
    }
}

//SET_EXPENSES
export const setExpenses=(expenses)=>{
   return{
       type:'SET_EXPENSES',
       expenses
   }
}

//export const startSetExpenses;
export const startSetExpenses=()=>{

    return (dispatch)=>{
               return database.ref('expenses')
                              .once('value')
                              .then((snapShot)=>{
                                    let expenses=[];
                                    snapShot.forEach(childSnapShot=>{                
                                    expenses.push({
                                         id:childSnapShot.key,
                                         ...childSnapShot.val()
                                    });
                               });
                                  console.log('going to call setExpenses');
                                  dispatch(setExpenses(expenses));
                                })
                             .catch((e)=>{
                                   console.log("Exception ="+e);
                              });
    }
      
}