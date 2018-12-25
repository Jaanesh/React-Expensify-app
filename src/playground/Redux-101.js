import { createStore } from 'redux';

const incrementCount=({incrementBy=1}={})=>{
     return {
         type:'INCREMENT',
         incrementBy
     }
}

const decrementCount=({decrementBy=1}={})=>{
    return {
        type:'DECREMENT',
        decrementBy
    }
}

const reset=()=>{
   return{
       type:'RESET'
   }
};

const set=({count=5}={})=>{
    return{
        type:'SET',
        count:count
    }
};

const store=createStore((state={count:0},action)=>{
  
     if(action.type==='INCREMENT'){
         console.log('INCREMENT');
         return {count:state.count+action.incrementBy};
     }
     else if(action.type==='DECREMENT'){
         console.log('DECREMENT');
         return {count:state.count-action.decrementBy};
     }
     else if(action.type==='RESET'){
         console.log('RESET');
         return {count:0};
     }
     else{
         return {count:action.count};
     }   
    
});
//console.log(store.getState());

store.dispatch(set({count:100}));
//store.dispatch(incrementCount({incrementBy:5}));
//store.dispatch(incrementCount());
//store.dispatch(decrementCount({decrementBy:5}));
//store.dispatch({type:'DECREMENT'});
//store.dispatch(reset());
//store.dispatch({type:'DECREMENT'});
console.log(store.getState());