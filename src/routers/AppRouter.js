import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';

import dashboardComponentTemplate from '../components/DashBoardComponent';
import createExpenseComponentTemplate from '../components/CreateExpenseComponent';
import editExpenseComponentTemplate from '../components/EditExpenseComponentTemplate';
import helpExpenseComponentTemplate from '../components/HelpExpenseComponent';
import notFoundComponentTemplate from '../components/NotFoundComponent';
import loginPageComponent from '../components/LoginpageComponent';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';

export const history=createHistory();

export default  ()=>(    
        <Router history={history}>
        <div>            
            <Switch>
                <Route path='/' component={loginPageComponent} exact={true}></Route>
                <PrivateRoute path='/dashboard' component={dashboardComponentTemplate} />
                <PrivateRoute path='/create' component={createExpenseComponentTemplate} />
                <PrivateRoute path='/edit/:id' component={editExpenseComponentTemplate} />
                <Route path='/help' component={helpExpenseComponentTemplate}></Route>
                <Route component={notFoundComponentTemplate}></Route>
            </Switch>  
        </div>                
    </Router>
    );        


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

