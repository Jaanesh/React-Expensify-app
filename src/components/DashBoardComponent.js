import React from 'react';
import TotalExpenseComponent from './TotalExpenseComponent.js';
import ConnectedExpenseListComponent from './ExpenseList';

const dashboardComponentTemplate=()=>(
    <div>
        <h2>This is dashboard</h2>
         <TotalExpenseComponent></TotalExpenseComponent>
        <ConnectedExpenseListComponent/>
    </div>    
);

export default dashboardComponentTemplate;