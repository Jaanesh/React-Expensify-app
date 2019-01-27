import moment from 'moment';
import expensesReducer from '../../reducers/ExpensesReducer';

let expenseObj1={id:'1', description:'jan rent',note:'',amount:3,createdAt:moment(0).
                                                                           subtract(5,'days').valueOf()};
let expenseObj2={id:'2', description:'feb rent',note:'',amount:2,createdAt:moment(0)};
let expenseObj3={id:'3', description:'mar fees',note:'',amount:1,createdAt:moment(0).
                                                                           add(5,'days').valueOf()};

let expensesArray=[expenseObj1,expenseObj2,expenseObj3];

test('should set default state',()=>{
       const action={ type:'@@INIT' };
       const state=expensesReducer(undefined,action);
       expect(state).toEqual([]);
});

test('should remove expenses',()=>{
    const action={type:'REMOVE_EXPENSE',id:'1' };
    const newState=expensesReducer(expensesArray,action);
    expect(newState).toEqual([expenseObj2,expenseObj3]);
});

test('should edit expense',()=>{
    let updateObject={ description:'january rent'};
    const action={type:'EDIT_EXPENSE',id:'1', updateObject};
    const newState=expensesReducer(expensesArray,action);
    expect(newState).toEqual([{...expenseObj1,...updateObject},expenseObj2,expenseObj3]);
});

test('should add expense',()=>{
    let updateObject={id:'4', description:'April rent',note:'',amount:4,createdAt:moment(0).
                                                                          add(10,'days').valueOf()};
    const action={type:'ADD_EXPENSE', expense:updateObject};
    const newState=expensesReducer(expensesArray,action);
    expect(newState).toEqual([expenseObj1,expenseObj2,expenseObj3,updateObject]);
});

test('should set expense',()=>{
    const action={type:'SET_EXPENSES', expenses:expensesArray};
    const newState=expensesReducer(expensesArray,action);
    expect(newState).toEqual([expenseObj1,expenseObj2,expenseObj3]);
});