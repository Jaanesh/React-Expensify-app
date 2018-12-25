import { createStore,combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense=({description='',note='',amount=0,createdAt=0}={})=>{
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

const editExpense=(id,updateObject)=>{
    return{
        type:'EDIT_EXPENSE',
        id,
        updateObject
    }
}

const removeExpense=(remove_id)=>{
    return{
        type:'REMOVE_EXPENSE',
        id:remove_id
    }
}

const expenseReducerDefaultState=[];

const expensesReducer=(state=expenseReducerDefaultState,action)=>{
    switch(action.type){        
        case 'ADD_EXPENSE':return [...state,action.expense];       
        case 'REMOVE_EXPENSE':return state.filter((individualExpense)=>individualExpense.id!==action.id);
        case 'EDIT_EXPENSE':          
             return state.map((individualExpense)=>{
                   if(individualExpense.id===action.id){
                     return {...individualExpense,...action.updateObject};
                   }
                   else 
                   {
                    return individualExpense;
                   }
        });                             
        default:return state;
    }
};

const filterReducerDefaultStore={
    text:'rent',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const setTextFilterAction=(text='')=>{
    return{
        type:'SET_TEXT_FILTER',
        text
    };
}

const sortByAmountAction=()=>{return{type:'SORT_BY_AMOUNT'};}

const sortByDateAction=()=>{return{type:'SORT_BY_DATE' }}

const setStartDate=(startDate=undefined)=>{
    return {
          type:'SET_START_DATE',
          startDate
    };
}

const setEndDate=(endDate=undefined)=>{
    return {
        type:'SET_END_DATE',
        endDate
    };
}

const filtersReducer=(state=filterReducerDefaultStore,action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':return {...state,text:action.text};
        case 'SORT_BY_DATE':return {...state,sortBy:'date'};
        case 'SORT_BY_AMOUNT':return {...state,sortBy:'amount'};
        case 'SET_START_DATE':return {...state,startDate:action.startDate};
        case 'SET_END_DATE':return {...state,endDate:action.endDate};
        default:return state;
    }
}
const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);

const listFilteredExpenses=(newExpensesState,{text,sortBy,startDate,endDate})=>{
     return (newExpensesState.filter((eachExpense)=>{        
         let pattern=text;
         let regex = new RegExp(pattern,'i');
         let startDateMatch=typeof startDate === 'number' ?eachExpense.createdAt>=startDate:false;
         let endDateMatch=typeof endDate === 'number' ?eachExpense.createdAt<=endDate:false;
         console.log('id='+eachExpense.id);
         console.log('eachExpense.createdAt='+eachExpense.createdAt);
         console.log('startDate='+startDate);
         console.log('endDate='+endDate);
        // console.log('regex='+regex);
         //console.log('text='+text);
         //console.log('des='+eachExpense.description);
         let  isTextPresent=regex.test(eachExpense.description);
         console.log('startDateMatch='+startDateMatch);
         console.log('endDateMatch='+endDateMatch);
         console.log('isTextPresent='+isTextPresent);
         return startDateMatch && endDateMatch && isTextPresent;
     })).sort((expense1,expense2)=>{
           if(sortBy==='date'){
                return expense1.createdAt <  expense2.createdAt ?  -1:1;
           }
           else if(sortBy==='amount'){
            return expense1.amount <  expense2.amount ?  -1:1;
           }
     });  
}

store.subscribe(()=>{
    const newState=store.getState();  
    let filteredExpenses=listFilteredExpenses(newState.expenses,newState.filters);
    console.log('Filtered Expense:');
    console.log(filteredExpenses);
});

let obj1=store.dispatch(addExpense({description:'Jan rent',amount:2750,createdAt:2000}));
//console.log(obj1.expense.id);
let obj2=store.dispatch(addExpense({description:'Feb rent',amount:5750,createdAt:1000}));
//store.dispatch(editExpense(obj2.expense.id,{amount:2000}));

//store.dispatch(removeExpense(obj1.expense.id));
//store.dispatch(setTextFilterAction('monthlyrent'));

//console.log(store.getState());



store.dispatch(setStartDate(500));
store.dispatch(setEndDate(3900));

store.dispatch(sortByDateAction());
store.dispatch(sortByAmountAction());

//console.log(store.getState());

