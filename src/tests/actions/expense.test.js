import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addExpense,editExpense,removeExpense,startAddExpense} from '../../actions/expense';
import database from '../../firebase/firebase';



const createMockStore=configureMockStore([thunk]);

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
        id:'1',     
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

test('should add expense to datastore and store',(done)=>{
    const store=createMockStore({});
    const expenseobject={ 
        description:'description',
        note:'note',
        amount:12345,
        createdAt:1000
    }

    //check whether the correct action is dispached to store
    store.dispatch(startAddExpense(expenseobject)).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseobject
            }
        });

        done();
    //check whether expense of particular id can be retrieved
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');  

    }).then(()=>{
        expect(snapshot.val()).toEqual(expenseobject);

        done();
 }); 
   
});

test('should add expense with defaults to datastore and store',(done)=>{
    const store=createMockStore({});
    const expenseobject={ 
        description:'',
        note:'',
        amount:0,
        createdAt:0
    }

    //check whether the correct action is dispached to store
    store.dispatch(startAddExpense(expenseobject)).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expenseobject
            }
        });

        done();
    //check whether expense of particular id can be retrieved
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');  

    }).then(()=>{
        expect(snapshot.val()).toEqual(expenseobject);

        done();
 }); ;
});

/* test('should add expense with provided expense obj',()=>{
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
}); */

/* test('should add expense when expense not provided',()=>{    
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
}); */