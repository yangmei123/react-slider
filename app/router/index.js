import React from 'react'
import ReactDOM from 'react-dom';
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom'

import App from '../main';


const SliderComponent = () => (
  <App>
    <Route exact path='/' component={App} />
  </App>
)
ReactDOM.render((
  <HashRouter history={hashHistory}>
    <SliderComponent />
  </HashRouter>
), document.getElementById('root'));