import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../components/Home';
import Roster from '../components/Roster';
import SelectQuestion from '../page/SelectQuestion';
// import { deflateRaw } from 'zlib';


export default class Main extends Component {
    render(){
        return(<main>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/roster' component={Roster}/>
              <Route path='/question' component={SelectQuestion}/>
            </Switch>
          </main>)
    }
}
