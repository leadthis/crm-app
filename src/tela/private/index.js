import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-dom';

import Home from './home';

const Index = (props) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Index;