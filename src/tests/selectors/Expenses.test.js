import moment from 'moment';
import listFilteredExpenses from '../../selectors/Expenses';

let expenseObj1={id:'1', description:'jan rent',note:'',amount:3,createdAt:moment(0).
                                                                           subtract(5,'days').valueOf()};
let expenseObj2={id:'2', description:'feb rent',note:'',amount:2,createdAt:moment(0)};
let expenseObj3={id:'3', description:'mar fees',note:'',amount:1,createdAt:moment(0).
                                                                           add(5,'days').valueOf()};

let expensesArray=[expenseObj1,expenseObj2,expenseObj3];


test('should filter by text value',()=>{
     const filterObject={text:'rent', sortBy:'date',startDate:undefined, endDate:undefined}
     const filteredExpenses=listFilteredExpenses(expensesArray,filterObject);
     expect(filteredExpenses).toEqual([expenseObj1,expenseObj2]);
});


test('should filter by start date',()=>{
    const filterObject={text:'', sortBy:'date',startDate:moment(0), endDate:undefined};
    const filteredExpenses=listFilteredExpenses(expensesArray,filterObject);
    expect(filteredExpenses).toEqual([expenseObj2,expenseObj3]);
});

test('should filter by end date',()=>{
    const filterObject={text:'', sortBy:'date',startDate:undefined, endDate:moment(0)};
    const filteredExpenses=listFilteredExpenses(expensesArray,filterObject);
    expect(filteredExpenses).toEqual([expenseObj1,expenseObj2]);
});

test('should sort by amount',()=>{
    const filterObject={text:'', sortBy:'amount',startDate:undefined, endDate:undefined};
    const filteredExpenses=listFilteredExpenses(expensesArray,filterObject);
    expect(filteredExpenses).toEqual([expenseObj3,expenseObj2,expenseObj1]);
});

test('should sort by date',()=>{
    const filterObject={text:'', sortBy:'date',startDate:undefined, endDate:undefined};
    const filteredExpenses=listFilteredExpenses(expensesArray,filterObject);
    expect(filteredExpenses).toEqual([expenseObj1,expenseObj2,expenseObj3]);
});

