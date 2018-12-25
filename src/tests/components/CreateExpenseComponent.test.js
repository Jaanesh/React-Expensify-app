import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {CreateExpenseComponentTemplate}  from '../../components/CreateExpenseComponent.js';

let expenseObj1={id:'1', description:'jan rent',note:'',amount:3,createdAt:moment(0).
                                                                    subtract(5,'days').valueOf()};
let wrapper,onSubmit,history;

beforeEach(()=>{
    onSubmit=jest.fn();
    history={push:jest.fn()};
    wrapper=shallow(<CreateExpenseComponentTemplate onSubmit={onSubmit} history={history} />);
});

test('should render CreateExpenseComponentTemplate correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenseObj1);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenseObj1);
});
