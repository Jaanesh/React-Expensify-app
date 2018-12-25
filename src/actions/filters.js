
export const sortByAmountAction=(sortBy='')=>{                                    
                                    return{
                                         type:'SORT_BY_AMOUNT',
                                         sortBy:'amount'
                                        };
                                    }

export const sortByDateAction=(sortBy='')=>{                    
                                    return{
                                        type:'SORT_BY_DATE',
                                        sortBy:'date'
                                    };
                                  }

export const setStartDate=(startDate=undefined)=>{
    return {
          type:'SET_START_DATE',
          startDate
    };
}

export const setEndDate=(endDate=undefined)=>{
    return {
        type:'SET_END_DATE',
        endDate
    };
}

export const setTextFilterAction=(text='')=>{
    return{
        type:'SET_TEXT_FILTER',
        text
    };
}