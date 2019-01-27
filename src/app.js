import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import appRouter from './routers/AppRouter.js';
import configureStore from './store/ConfigureStore.js';
import {addExpense,editExpense,removeExpense} from './actions/expense';
import {sortByAmountAction,sortByDateAction,setStartDate,setEndDate,setTextFilterAction} from './actions/filters';
import listFilteredExpenses from './selectors/Expenses.js';
import 'normalize.css/normalize.css';
import  './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase.js';

const store=configureStore();

/*
store.subscribe(()=>{
    const newState=store.getState();  
    let filteredExpenses=listFilteredExpenses(newState.expenses,newState.filters);
    console.log('Filtered Expense:');
    console.log(filteredExpenses);
}); */

// console.log(store.getState());

//store.dispatch(addExpense({description:'water bill',amount:2750,createdAt:600}));
//store.dispatch(addExpense({description:'rent',amount:60,createdAt:500}));
//store.dispatch(addExpense({description:'gas bill',amount:5000,createdAt:1100}));


//store.dispatch(setTextFilterAction('bill'));

//store.dispatch(setStartDate(500));
//store.dispatch(setEndDate(39000000000000));

let RouterComponent=appRouter();
let jsxTemplate=(
    <Provider store={store}>
        <RouterComponent></RouterComponent>
    </Provider>
);
//let appRoot = document.getElementById('app1');
ReactDOM.render(jsxTemplate, document.getElementById('app1'));