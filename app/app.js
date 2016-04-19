import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './components/Main';
import Results from './components/Results';
import Single from './components/Single';

import css from  './css/style.styl';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Results} />
      <Route path="/search/:searchTerm" component={Results}/>
      <Route path="/beer/:beerId/:beerSlug" component={Single}/>
    </Route>
  </Router>
), document.querySelector('#root'))