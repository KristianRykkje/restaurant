import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import Front from './pages/Front';
import Gallery from './pages/Gallery';
import Menu from './pages/Menu';
import Story from './pages/Story';
import Contact from './pages/Contact';
import Home2 from './pages/Home2';
import Menu2 from './pages/Menu2';
import Home3 from './pages/Home3';
import history from '../history';
import Header from './Header';
import Footer from './Footer';
import FooterCompany from './FooterCompany';

import GA from '../utils/GoogleAnalytics';


const App = () => {
    return (
        <div>
            <Router history={history}>
                { GA.init() && <GA.RouteTracker />}
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Front} />
                        <Route path="/home2" exact component={Home2} />
                        <Route path="/home3" exact component={Home3} />
                        <Route path="/menu" exact component={Menu} />
                        <Route path="/menu2" exact component={Menu2} />
                        <Route path="/gallery" exact component={Gallery} />
                        <Route path="/story" exact component={Story} />
                        <Route path="/contact" exact component={Contact} />
                    </Switch>
                    <Footer />
                    <FooterCompany />
                </div>
            </Router>
        </div>
    );
};

export default App;