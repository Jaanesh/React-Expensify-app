import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux' ;
import { startLogout } from '../actions/auth';

export const Header=({startLogout})=>(
    <div>
        <h2>Expensify</h2>  
        <NavLink to='/dashboard' activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <br/>
        <NavLink to='/create' activeClassName="is-active">create Expense</NavLink>
        <br/>
        <NavLink to='/edit' activeClassName="is-active">edit expense</NavLink> 
        <br/>
        <NavLink to='/help' activeClassName="is-active">help</NavLink>  
        <br/>
        <button onClick={startLogout}>Logout</button>    
    </div>   
);

const mapDispatchToProps=(dispatch)=>({
    startLogout:()=>dispatch(startLogout())
}  
)

export default connect(undefined,mapDispatchToProps)(Header);