import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/Home';
import RedirectPage from '../components/RedirectPage';
import Dashboard from '../components/DashBoard';
import NotFoundPage from '../components/NotFoundPage';

 class AppRouter extends Component{
     render(){
        return (
           <BrowserRouter>
            <div className="main">
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/redirect" component={RedirectPage}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
           </BrowserRouter>
        )

     }
    
}
export default AppRouter