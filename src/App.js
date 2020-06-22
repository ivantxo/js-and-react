import React from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
// Class components with short syntax
import Counter from './Counter';
// Template Literals
import TemplateLiterals from './TemplateLiterals';
// Iterating Lists
import ItemsList from './ItemsList';
// Some ES6 tricks
import jstricks from './jstricks';
// Props
import Props from './Props';
// Promises
import Promises from './Promises';
// useState and useEffect
import StopWatch from './StopWatch';
// Data fetching with hooks
import DataFetchingHooks from './DataFetchingHooks';


function App() {
  return (
    <div>       
      <h1>JavaScript ES6 examples</h1>
      <ul className="header">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/counter">Class Components</NavLink></li>
        <li><NavLink to="/templateliterals">Template Literals</NavLink></li>
        <li><NavLink to="/itemslist">Items Lists</NavLink></li>
        <li><NavLink to="/jstricks">JS Tricks</NavLink></li>
        <li><NavLink to="/props">Props</NavLink></li>
        <li><NavLink to="/promises">Promises</NavLink></li>
        <li><NavLink to="/stopwatch">useState</NavLink></li>
        <li><NavLink to="/datafetch">Data Fetch 1</NavLink></li>
      </ul>
      <div className="content">
        <Route path="/" />
        <Route path="/counter" component={Counter} />
        <Route path="/templateliterals" component={TemplateLiterals} />
        <Route path="/itemslist" component={ItemsList} />
        <Route path="/jstricks" component={jstricks} />
        <Route path="/props" component={Props} />
        <Route path="/promises" component={Promises} />
        <Route path="/stopwatch" component={StopWatch} />
        <Route path="/datafetch" component={DataFetchingHooks} />
      </div>
    </div>
  );
}

export default App;
