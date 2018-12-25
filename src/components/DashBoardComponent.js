import React from 'react';
import ConnectedExpenseListComponent from './ExpenseList';

const dashboardComponentTemplate=()=>(
    <div>This is dashboard
        <ConnectedExpenseListComponent/>
    </div>    
);

export default dashboardComponentTemplate;