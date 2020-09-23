import React from 'react';
import './App.less';
import {BrowserRouter, Route, Link} from "react-router-dom";
import AppDemo from "./AppDemo"

const AppDemo = () => {
    return (
        <div className='AppDemo'>
            <BrowserRouter>
                <Link to='/'>LinkDemo</Link>
                <Route path"/" component={LinkDemo}/>
            </BrowserRouter>
        </div>
    );
};

export default AppDemo;