'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import App                         from './App';
import HomePage                    from './pages/HomePage';
import SearchPage                  from './pages/SearchPage';
import DisplayPage				   from './pages/DisplayPage';
import Snippet1  				   from './pages/Snippet1';
import Snippet2  				   from './pages/Snippet2';
import NotFoundPage                from './pages/NotFoundPage';

export default (
  <Router history={CreateBrowserHistory()}>
    <Route path="/" component={App}>

      <IndexRoute component={HomePage} />

      <Route path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/display" component={DisplayPage} />
      <Route path="/snippet1" component={Snippet1} />
      <Route path="/snippet2" component={Snippet2} />
      <Route path="*" component={NotFoundPage} />

    </Route>
  </Router>
);
