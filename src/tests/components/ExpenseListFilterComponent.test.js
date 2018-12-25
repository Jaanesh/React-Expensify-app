import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {ExpenseListFilterComponent} from '../../components/ExpenseListFilterComponent.js';

const filters={text:'',sortBy:'date',startDate:undefined,endDate:undefined};
const altFilters={text:'',sortBy:'date',startDate:moment(0),endDate:moment(0).add(3,'days')};

let setStartDate,setEndDate,setTextFilterAction,sortByDateAction,sortByAmountAction,wrapper;

beforeEach(()=>{
    setStartDate=jest.fn();
    setEndDate=jest.fn();
    setTextFilterAction=jest.fn();
    sortByDateAction=jest.fn();
    sortByAmountAction=jest.fn();
    wrapper=shallow(<ExpenseListFilterComponent 
                             filters={filters}
                             setStartDate={setStartDate}
                             setEndDate={setEndDate}
                             setTextFilterAction={setTextFilterAction}
                             sortByDateAction={sortByDateAction}
                             sortByAmountAction={sortByAmountAction}
                         />)
});

test('should render ExpenseListFilters ',()=>{    
     expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly',()=>{
    wrapper.setProps({
        filters:altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change',()=>{   
    wrapper.find('input').at(0).simulate('change',{target:{value:'bills'} });    
    expect(setTextFilterAction).toHaveBeenLastCalledWith('bills');
});

test('should sort by date',()=>{
    wrapper.find('select').at(0).simulate('change',{target:{value:'date'} });    
    expect(sortByDateAction).toHaveBeenLastCalledWith('date');
});

test('should sort by amount',()=>{
    wrapper.find('select').at(0).simulate('change',{target:{value:'amount'} });    
    expect(sortByAmountAction).toHaveBeenLastCalledWith('amount');
});

test('should handle date changes',()=>{
    const startDate=moment(0);
    const  endDate=moment(0).add(3,'days');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes',()=>{
    wrapper.find('DateRangePicker').prop('onFocusChange')(true);
    expect(wrapper.state('calendarFocused')).toBe(true);
});