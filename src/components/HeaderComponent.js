import React from 'react';
import {NavLink} from 'react-router-dom';

const Header=()=>(
    <div>
        <h2>Expensify</h2>  
        <NavLink to='/' activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <br/>
        <NavLink to='/create' activeClassName="is-active">create Expense</NavLink>
        <br/>
        <NavLink to='/edit' activeClassName="is-active">edit expense</NavLink> 
        <br/>
        <NavLink to='/help' activeClassName="is-active">help</NavLink>      
    </div>   
);

export default Header;