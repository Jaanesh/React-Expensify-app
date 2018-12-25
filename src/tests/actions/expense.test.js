import {addExpense,editExpense,removeExpense} from '../../actions/expense';

test('should remove expense',()=>{
    const actionObject=removeExpense('080294');
    expect(actionObject).toEqual({
        type:'REMOVE_EXPENSE',
        id:'080294'
    });
});

test('should edit expense',()=>{
    const updateobject={
        note:'dummy'
    }
    const actionObject=editExpense('080294',updateobject);
    expect(actionObject).toEqual({
        type:'EDIT_EXPENSE',
        id:'080294',
        updateObject:{
            note:'dummy'
        }
    });
});

test('should add expense with provided expense obj',()=>{
    const expenseobject={        
        description:'description',
        note:'note',
        amount:12345,
        createdAt:1000
    }    
    const actionObject=addExpense(expenseobject);
    expect(actionObject).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            ...expenseobject
        }        
    });    
});

test('should add expense when expense not provided',()=>{    
    const actionObject=addExpense();
    expect(actionObject).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),           
            description:'',
            note:'',
            amount:0,
            createdAt:0
        }        
    });    
});