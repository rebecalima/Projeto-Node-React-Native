import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

export default function Routes(){
    return( //jsx - sintaxe do html dentro do js
        <BrowserRouter>
            <Route path='/' exact component={Login}/>
            <Route path='/dev/:id' component={Main}/>
        </BrowserRouter>
    );
}
