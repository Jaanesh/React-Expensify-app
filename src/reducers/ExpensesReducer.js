
const expenseReducerDefaultState=[];

export default (state=expenseReducerDefaultState,action)=>{
    switch(action.type){        
        case 'ADD_EXPENSE':return [...state,action.expense];       
        case 'REMOVE_EXPENSE':return state.filter((individualExpense)=>individualExpense.id!==action.id);
        case 'EDIT_EXPENSE':          
             return state.map((individualExpense)=>{
                  
                   if(individualExpense.id===action.id){
                     return {...individualExpense,...action.updateObject};
                   }
                   else 
                   {
                    return individualExpense;
                   }
        });                             
        default:return state;
    }
};

//export default expensesReducer;