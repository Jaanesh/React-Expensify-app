//hoc-higher order components

import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>This is authenticated message from {props.name}</p>
    </div>
);

const authInfo=(WrapperComponent)=>{
    return (props)=>(
        <div>
            {
                (props.isAuthenticated)?<WrapperComponent {...props}/>:<p>Not Authorised</p>               
            }
            
        </div>
    );
};

const AuthComponent=authInfo(Info);
let appRoot = document.getElementById('app1');
ReactDOM.render(<AuthComponent isAuthenticated={false} name='Jana'></AuthComponent>, appRoot);