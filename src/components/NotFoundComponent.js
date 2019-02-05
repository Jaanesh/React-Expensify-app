import React from 'react';
import {Link} from 'react-router-dom';

const notFoundComponentTemplate=()=>(
    <div>404 <Link to='/dashboard'>GoHome</Link></div>
);

export default notFoundComponentTemplate;
