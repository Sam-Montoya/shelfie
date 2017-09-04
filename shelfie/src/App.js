import React, { Component } from 'react';
import './App.css';
import Main from './component/Main/Main';
import Edit from './component/Edit/Edit';
import Add from './component/Add/Add';
import Shelf from './component/Shelf/Shelf';
import { Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/shelf/:id" component={Shelf} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/addBin/:id" component={Add} />
      </Switch>
    );
  }
}

export default App;
