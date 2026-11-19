// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Pages
import CorporateBusiness from './home/CorporateBusiness';
import ServiceDetails from "./elements/ServiceDetails";
import ServiceDetails2 from "./elements/ServiceDetails2";
import ServiceDetails3 from "./elements/ServiceDetails3";
import About from "./elements/About";
import Contact from "./elements/Contact";
import error404 from "./elements/error404";

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={CorporateBusiness}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/service-details2`} component={ServiceDetails2}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/service-details3`} component={ServiceDetails3}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>

                        {/* Old template addresses that may still be bookmarked or indexed */}
                        <Redirect exact from="/corporate-business" to="/" />
                        <Redirect exact from="/home-one" to="/" />
                        <Redirect exact from="/service" to="/" />

                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                        <Route component={error404}/>
                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
// Remove the old offline-cache service worker from visitors' browsers
serviceWorker.unregister();
