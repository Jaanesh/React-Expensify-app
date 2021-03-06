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

//start edit expense

export const startEditExpense=(id,updateObject)=>{
    return (dispatch)=>{
            
         return database.ref(`expenses/${id}`)
                        .update(updateObject)
                        .then(()=>{
                            console.log(`going to update in fire base for expense/${id}`);
                            dispatch(editExpense(id,updateObject));
                        });
    }
}

export const removeExpense=(remove_id)=>{
    return{
        type:'REMOVE_EXPENSE',
        id:remove_id
    }
}

//start remove expense

export const startRemoveExpense=(remove_id)=>{
    return (dispatch)=>{
        return database.ref(`/expenses/${remove_id}`)
                .remove()
                .then(()=>{
                    console.log(`/expenses/${remove_id} is going to be removed from firebase`);
                    dispatch(removeExpense(remove_id));
                     
                 }).catch((e)=>{
                      console.log("Exception="+e);
                }); 

               
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