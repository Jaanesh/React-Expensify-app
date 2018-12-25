import uuid from 'uuid';

export const addExpense=({description='',note='',amount=0,createdAt=0}={})=>{
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