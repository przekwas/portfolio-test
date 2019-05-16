import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbah from '../components/Navbah';
import Home from './Home';
import About from './About';
import Work from './Work';
import Experience from './Experience';

const App = () => {
    return (
        <BrowserRouter>
            <main className="container mx-auto">
                <Navbah />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/work" component={Work} />
                    <Route exact path="/experience" component={Experience} />
                </Switch>
            </main>
        </BrowserRouter>
    );
}

export default App;