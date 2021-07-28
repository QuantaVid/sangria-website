import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/privacy-policy" exact component={PrivacyPolicy} />
                <Route path="/terms-of-service" exact component={Terms} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;