import React from 'react';
import {connect} from 'react-redux' ;
import {DateRangePicker} from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css';
import {setTextFilterAction,sortByAmountAction,sortByDateAction,setStartDate,setEndDate} from '../actions/filters';

export class ExpenseListFilterComponent extends React.Component{

     constructor(props){
          super(props);
          this.state={
               calendarFocused:null
          }
     }

     onDatesChange=({startDate,endDate})=>{
          console.log('!!!!!!!!!!!!!!!!!!onDatesChange');
          console.log('!!!!!!!!!!!!!!!!!!startDate='+startDate);
          console.log('!!!!!!!!!!!!!!!!!!endDate='+endDate);
          
          if(startDate!==null)
          {
               console.log('!!!!!!!!!!!!!!!!!!startDate is fired');
               this.props.setStartDate(startDate);
          }
          if(endDate!==null)
          {
               console.log('!!!!!!!!!!!!!!!!!!endDate is fired');
               this.props.setEndDate(endDate);
          }

          if(startDate==null && endDate==null)
          {
               console.log('!!!!!!!!!!!!!!!!!!both start and end date are null');
               this.props.setStartDate(startDate);
               this.props.setEndDate(endDate);
          }
          
     }

     onFocusChange=(calendarFocused)=>{
           this.setState(()=>({calendarFocused}));
     }

     onTextFilterChange=(event)=>{
          console.log(event.target.value);
          this.props.setTextFilterAction(event.target.value);
     }

     onSortChange=(e)=>{
                           
          if(e.target.value==='date'){
           //console.log('******inside sortByDateAction');
            this.props.sortByDateAction('date');
          }
          else if(e.target.value==='amount'){
          // console.log('******inside sortByAmountAction');
           this.props.sortByAmountAction('amount');
          }
         
}

     render(){
          return(
               <div>
               <input type="text" onChange={this.onTextFilterChange}></input>

                 Sort by
               <select value={''} onChange={this.onSortChange}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
               </select>
        
               <DateRangePicker
                     startDate={this.props.filters.startDate}
                     endDate={this.props.filters.endDate}
                     onDatesChange={this.onDatesChange}
                     focusedInput={this.state.calendarFocused}
                     onFocusChange ={this.onFocusChange}
                     numberOfMonths={1}
                     isOutsideRange={()=>false}
                     showClearDates={true}
               />              
          </div>

          );


          
     }
}


const mapStateToProps=(state)=>{
    return{
          filters:state.filters
    }
}

const mapDispatchToProps=(dispatch)=>{     
       return{
          setStartDate:(startDate)=>{dispatch(setStartDate(startDate));},
          setEndDate:(endDate)=>{dispatch(setEndDate(endDate));},
          setTextFilterAction:(filterText)=>{dispatch(setTextFilterAction(filterText))},
          sortByDateAction:()=>{dispatch(sortByDateAction('date'));},
          sortByAmountAction:()=>{dispatch(sortByAmountAction('amount'));}
       }
        
  }

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilterComponent);

