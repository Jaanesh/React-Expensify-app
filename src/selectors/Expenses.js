import moment from 'moment';

const listFilteredExpenses=(newExpensesState,{text,sortBy,startDate,endDate})=>{
    return (newExpensesState.filter((eachExpense)=>{        
        let pattern=text;
        let regex = new RegExp(pattern,'i');
        let createdAtMoment= moment(eachExpense.createdAt);
        let startDateMatch=startDate? moment(startDate).isSameOrBefore(createdAtMoment,'day') : true;
        let endDateMatch=endDate?  moment(createdAtMoment).isSameOrBefore(endDate,'day'):true;         
        let  isTextPresent=regex.test(eachExpense.description);
      /*  console.log('*********************************');
        console.log('startDate='+startDate);
        console.log('endDate='+endDate);
        console.log('eachExpense.createdAt='+eachExpense.createdAt);
        console.log('des='+eachExpense.description);
        console.log('sortby='+sortBy);
        console.log('startDateMatch='+startDateMatch);
        console.log('endDateMatch='+endDateMatch);
        console.log('isTextPresent='+isTextPresent);*/
        return startDateMatch && endDateMatch && isTextPresent;
    })).sort((expense1,expense2)=>{
          if(sortBy==='date'){
               return expense1.createdAt <  expense2.createdAt ?  -1:1;
          }
          else if(sortBy==='amount'){
           return expense1.amount <  expense2.amount ?  -1:1;
          }
    });  
}

export default listFilteredExpenses;