import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/home';
import NotFoundPage from './components/notFoundPage';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path = "/" component={Home} />
                <Route exact path = "/home" component={Home} />
                <Route path="" component={NotFoundPage}/>
            </Switch>
        </div>
    )
}

export default Routes
