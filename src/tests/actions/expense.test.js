import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startEditExpense,startRemoveExpense,startSetExpenses,addExpense,editExpense,removeExpense,startAddExpense,setExpenses} from '../../actions/expense';
import database from '../../firebase/firebase';
import moment from 'moment';

let expenseObj1={id:'1', description:'jan rent',note:'',amount:3,createdAt:1000};
let expenseObj2={id:'2', description:'feb rent',note:'',amount:2,createdAt:2000};
let expenseObj3={id:'3', description:'mar fees',note:'',amount:1,createdAt:3000};

let expenses=[expenseObj1,expenseObj2,expenseObj3];

 beforeEach((done)=>{



   const expensesData={};
   expenses.forEach(({id,description,note,amount,createdAt})=>{
    expensesData[id]={description,note,amount,createdAt};  
   });

   
    database.ref('expenses')
           .set(expensesData)
           .then(()=>done())
           .catch((err)=>{
               console.log("Error while setting up in expense test");
           }); 
}); 

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

       // done();
    //check whether expense of particular id can be retrieved
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');  

    }).then((snapshot)=>{
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

    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseobject);

        done();
    }); 
});

test('should setup set expense action object with data',()=>{
    const actionObject=setExpenses(expenses);
    expect(actionObject).toEqual({
        type:'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase',(done)=>{
    const store=createMockStore({});

    store.dispatch(startSetExpenses()).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        });

        done();
});

});

test('should remove expenses from firebase for given id',(done)=>{
    const store=createMockStore({});
    let remove_id='1';
    store.dispatch(startRemoveExpense(remove_id)).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id:remove_id
        });
   
        return database.ref(`expenses/${remove_id}`).once('value');
     }).then((snapshot)=>{
         // tobefalsy is used because we are expecting false since id is already removed from test db
        expect(snapshot.val()).toBeFalsy();
        done();
    }); 
});

test('should edit expense in firebase db',(done)=>{
    const store=createMockStore({});
    let updateId='1';
    const updateObject={ 
        description:'dummy'       
    }

    store.dispatch(startEditExpense(updateId,updateObject))
         .then(()=>{
            const actions=store.getActions();
            expect(actions[0]).toEqual({
                type:'EDIT_EXPENSE',
                id:updateId,
                updateObject
            });
            
            return database.ref(`expenses/${updateId}`).once('value');
    }).then((snapShot)=>{
           expect(snapShot.val().description).toBe('dummy');
           done();
    });
})

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
}); */