import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
//import 'react-dates/lib/css/_datepicker.css';
import {ExpenseList} from '../../components/ExpenseList.js';

let expenseObj1={id:'1', description:'jan rent',note:'',amount:3,createdAt:moment(0).
                                                                           subtract(5,'days').valueOf()};
let expenseObj2={id:'2', description:'feb rent',note:'',amount:2,createdAt:moment(0)};
let expenseObj3={id:'3', description:'mar fees',note:'',amount:1,createdAt:moment(0).
                                                                           add(5,'days').valueOf()};

let expensesArray=[expenseObj1,expenseObj2,expenseObj3];


test('should render ExpenseList with expenses',()=>{
    const wrapper=shallow(<ExpenseList expenses={expensesArray} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list with no expense',()=>{
    const wrapper=shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});