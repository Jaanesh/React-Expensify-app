import moment from 'moment' ;
import {sortByAmountAction,sortByDateAction,setStartDate,setEndDate,setTextFilterAction} from '../../actions/filters';

test('should sortByAmountAction',()=>{
    const actionObject=sortByAmountAction('amount');
    expect(actionObject).toEqual({
        type:'SORT_BY_AMOUNT',
        sortBy:'amount'
    });
});

test('should sortByDateAction',()=>{
    const actionObject=sortByDateAction('date');
    expect(actionObject).toEqual({
        type:'SORT_BY_DATE',
        sortBy:'date'
    });
});

test('should setStartDate',()=>{
    const date=moment(0);
    const actionObject=setStartDate(date);
    expect(actionObject).toEqual({
        type:'SET_START_DATE',
        startDate:date
    });
});

test('should setEndDate',()=>{
    const date=moment(0);
    const actionObject=setEndDate(date);
    expect(actionObject).toEqual({
        type:'SET_END_DATE',        
        endDate:date
    });
});

test('should setTextFilterAction',()=>{
    const actionObject=setTextFilterAction('rent');
    expect(actionObject).toEqual({
        type:'SET_TEXT_FILTER',
        text:'rent'
    });
});

test('should setTextFilterAction when test filter not provided',()=>{
    const actionObject=setTextFilterAction();
    expect(actionObject).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    });
});