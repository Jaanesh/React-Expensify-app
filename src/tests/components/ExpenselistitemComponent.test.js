import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseItem from '../../components/ExpenseListItemComponent';

let expenseObj1={id:'1', description:'jan rent',note:'',amount:3,createdAt:moment(0).
                                                                           subtract(5,'days').valueOf()};

test('should render a single expenseitem when one expense is passes as prop ',()=>{
     const wrapper=shallow(<ExpenseItem {...expenseObj1}/>);
     expect(wrapper).toMatchSnapshot();
});

test('should render a  expenseitem when no expense is passes as prop ',()=>{
    const wrapper=shallow(<ExpenseItem />);
    expect(wrapper).toMatchSnapshot();
});

