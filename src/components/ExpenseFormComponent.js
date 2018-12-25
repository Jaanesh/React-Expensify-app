import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            id:props.expenseToBeEdited?props.expenseToBeEdited.id:'',
            description:props.expenseToBeEdited?props.expenseToBeEdited.description:'',
            note:props.expenseToBeEdited?props.expenseToBeEdited.note:'',
            amount:props.expenseToBeEdited?(props.expenseToBeEdited.amount/100).toString():'',
            createdAt:props.expenseToBeEdited?moment(props.expenseToBeEdited.createdAt):moment(),
            calendarFocused:false,
            error:'',
            buttonName:props.expenseToBeEdited?'Update':'Add Expense'
        };
    } 
     

    onDescriptionChange=(event)=>{
         console.log('Inside description state change='+event.target.value);
         let description=event.target.value;         
         console.log('newDescription='+description);
         this.setState(()=>({description}));
    }

    onNoteStateChange=(event)=>{
        console.log('Inside onNoteStateChange='+event.target.value);
        let note=event.target.value;
        this.setState(()=>({note}));
    }

    onAmountChange=(event)=>{
        console.log('Inside onAmountChange='+event.target.value);
        let amount=event.target.value;
        let regex=/^\d+(\.\d{0,2})?$/;

        if( amount.trim().length<1 ||regex.test(amount)){
            console.log('success');
            this.setState(()=>({amount}));
        }
        else{
            console.log('failed');
        }

    }

    onDateChange=(createdAt)=>{
        console.log('createdeAt='+createdAt);
        if(createdAt){
            this.setState(()=>({createdAt}));
        }        
    }

    onCalendarFocusChange=({focused})=>{
        console.log('iscalendarFocused='+focused);
        let calendarFocused=focused;
        this.setState(()=>({calendarFocused}));
    };

           
    onFormSubmit=(event)=>{
           event.preventDefault();
          
           let error='';
           if(!this.state.description || !this.state.amount){
                console.log('description/amount should not be empty');
                error='description/amount should not be empty';
                this.setState(()=>({error}));
           }
           else{
                error='';
                this.setState(()=>({error}));
                this.props.onSubmit({
                    description:this.state.description,
                    note:this.state.note,
                    amount:parseFloat(this.state.amount,10)*100,
                    createdAt:this.state.createdAt.valueOf()
                });
           }

    }

    

    render(){
        return(
            <div>           
            {this.state.error && <h3>{this.state.error}</h3>}
            <form onSubmit={this.onFormSubmit}>
                Description<input 
                                type="text" 
                                placeholder='description'
                                autoFocus
                                value={this.state.description}
                                onChange={this.onDescriptionChange}
                                ></input>
                <br/>
                Amount<input 
                               type="text" 
                               placeholder="amount" 
                               value={this.state.amount}
                               onChange={this.onAmountChange}
                               autoFocus></input>
                <br/>
                Date<SingleDatePicker
                                date={this.state.createdAt}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                onFocusChange={this.onCalendarFocusChange}  
                                numberOfMonths={1}    
                                isOutsideRange={()=>false}          
                   ></SingleDatePicker>
                 <br/>   <br/>
                Note<textarea 
                           placeholder="Add a note for expense(optional)"
                           value={this.state.note}
                           onChange={this.onNoteStateChange}></textarea>
                <br/><br/>
                <button>{this.state.buttonName}</button>
                
               
            </form>
            </div>
        );
    }
}