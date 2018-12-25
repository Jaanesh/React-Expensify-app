import moment from 'moment';
import filterReducer from '../../reducers/FiltersReducer';

const filterReducerDefaultStore={
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
}

test('should setup default filter values',()=>{
      const action={ type:'@@INIT' };
      const state=filterReducer(undefined,action);
      expect(state).toEqual(filterReducerDefaultStore);
});

test('should set sort by to amount',()=>{
    const action={   type:'SORT_BY_AMOUNT',  sortBy:'amount' };
    const state=filterReducer(filterReducerDefaultStore,action);
    expect(state).toEqual({...filterReducerDefaultStore,sortBy:'amount'});
});

test('should set sort by to date',()=>{
    const temp={
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }
    const action={   type:'SORT_BY_DATE',  sortBy:'date' };
    const state=filterReducer(temp,action);
    expect(state).toEqual({...filterReducerDefaultStore});
});

test('should set test filter',()=>{
    const action={   type:'SET_TEXT_FILTER',  text:'rent' };
    const state=filterReducer(filterReducerDefaultStore,action);
    expect(state).toEqual({...filterReducerDefaultStore,text:'rent'});
});

test('should set start date filter',()=>{
    const action={   type:'SET_START_DATE',  startDate:moment(0) };
    const state=filterReducer(filterReducerDefaultStore,action);
    expect(state).toEqual({...filterReducerDefaultStore,startDate:moment(0)});
});

test('should set end date filter',()=>{
    const action={   type:'SET_END_DATE',  endDate:moment(0) };
    const state=filterReducer(filterReducerDefaultStore,action);
    expect(state).toEqual({...filterReducerDefaultStore,endDate:moment(0)});
});