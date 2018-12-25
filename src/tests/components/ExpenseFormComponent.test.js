import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import  ExpenseForm from '../../components/ExpenseFormComponent.js';

let expenseObj1={id:'1', description:'jan rent',note:'',amount:3,createdAt:12345 };
                                                                           

test('should render ExpenseForm without expense data',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense form with expense data',()=>{
    const wrapper=shallow(<ExpenseForm {...expenseObj1}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission',()=>{
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on inut change',()=>{
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target:{value:'new description'}
    });
    expect(wrapper.state('description')).toBe('new description');
    expect(wrapper).toMatchSnapshot();
});

test('should set note on input change',()=>{
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change',{
        target:{value:'new note'}
    });
    expect(wrapper.state('note')).toBe('new note');
    expect(wrapper).toMatchSnapshot();
});

test('should set amount if valid input',()=>{
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value:'08.02' }
    });
    expect(wrapper.state('amount')).toBe('08.02');
    expect(wrapper).toMatchSnapshot();
});

test('should not set amount if valid input',()=>{
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value:'08.0294' }
    });
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop for valid form submission ',()=>{
    const onSubmitSpy=jest.fn();
    const wrapper=shallow(<ExpenseForm expenseToBeEdited={expenseObj1} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:'jan rent',
        note:'',
        amount:3,
        createdAt:12345
    });
});

test('should set new date on date change',()=>{
    const now=moment();
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toBe(now);
});

test('should set onFocusChange on foces change',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true});
    expect(wrapper.state('calendarFocused')).toBe(true);
});