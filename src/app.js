import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter,{history} from './routers/AppRouter.js';
import configureStore from './store/ConfigureStore.js';
import {startSetExpenses,addExpense,editExpense,removeExpense} from './actions/expense';
import {sortByAmountAction,sortByDateAction,setStartDate,setEndDate,setTextFilterAction} from './actions/filters';
import listFilteredExpenses from './selectors/Expenses.js';
import 'normalize.css/normalize.css';
import  './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import {firebase} from './firebase/firebase';
import {login,logOut} from './actions/auth';


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

//let RouterComponent=appRouter();

//let RouterComponent=appRouter;

let jsxTemplate=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
//let appRoot = document.getElementById('app1');

ReactDOM.render(<p>Loading...</p>, document.getElementById('app1'));

let hasRendered=false;

const renderApp=()=>{
    console.log('hasRendered='+hasRendered);
   if(!hasRendered){
      ReactDOM.render(jsxTemplate, document.getElementById('app1'));
      hasRendered=true;
   }
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log("user logged in");

        let uid=user.uid;

        console.log('uid='+uid);

        store.dispatch(login(uid));

        store.dispatch(startSetExpenses()).then(()=>{
             renderApp();
             if(history.location.pathname==='/'){
                history.push('/dashboard');
             }
        });

       
    }else{
        console.log("user logged out,push user to root");

        store.dispatch(logOut());

        renderApp();
        history.push('/');
    }
});