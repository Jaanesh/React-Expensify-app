import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from '../components/HeaderComponent.js';
import dashboardComponentTemplate from '../components/DashBoardComponent';
import createExpenseComponentTemplate from '../components/CreateExpenseComponent';
import editExpenseComponentTemplate from '../components/EditExpenseComponentTemplate';
import helpExpenseComponentTemplate from '../components/HelpExpenseComponent';
import notFoundComponentTemplate from '../components/NotFoundComponent';

export default  ()=>{
    return (props)=>(
        <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={dashboardComponentTemplate} exact={true}></Route>
                <Route path='/create' component={createExpenseComponentTemplate}></Route>
                <Route path='/edit/:id' component={editExpenseComponentTemplate}></Route>
                <Route path='/help' component={helpExpenseComponentTemplate}></Route>
                <Route component={notFoundComponentTemplate}></Route>
            </Switch>  
        </div>                
    </BrowserRouter>
    );        
};

/*const AppRouter=(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={dashboardComponentTemplate} exact={true}></Route>
                <Route path='/create' component={createExpenseComponentTemplate}></Route>
                <Route path='/edit' component={editExpenseComponentTemplate}></Route>
                <Route path='/help' component={helpExpenseComponentTemplate}></Route>
                <Route component={notFoundComponentTemplate}></Route>
            </Switch>  
        </div>                
    </BrowserRouter>
);

export default AppRouter;
*/

