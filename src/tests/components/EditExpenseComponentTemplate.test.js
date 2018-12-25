import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {EditExpenseComponentTemplate} from '../../components/EditExpenseComponentTemplate.js';

let expenseObj1={id:'1', description:'jan rent',note:'',amount:3,createdAt:moment(0).
                                                                    subtract(5,'days').valueOf()};

let updateobj={id:'2', description:'Feb rent',note:'',amount:3,createdAt:moment(0).
                                                                    subtract(5,'days').valueOf()};
let wrapper,updateExpense,removeExistingExpense,history,expenseToBeEdited,onSubmit,onClick;

beforeEach(()=>{    
    updateExpense=jest.fn();
    removeExistingExpense=jest.fn();
    history={push:jest.fn()};
    expenseToBeEdited=expenseObj1;
    wrapper=shallow(<EditExpenseComponentTemplate expenseToBeEdited={expenseToBeEdited} 
                                                  updateExpense={updateExpense}
                                                  removeExistingExpense={removeExistingExpense}
                                                  history={history} />);
});

test('should render edit expense',()=>{
         expect(wrapper).toMatchSnapshot();
});

test('should handle edit expene',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(updateobj);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(updateExpense).toHaveBeenLastCalledWith('1',updateobj);
});

test('should handle remove expense',()=>{
    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExistingExpense).toHaveBeenLastCalledWith('1');
});