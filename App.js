import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Router/home'
import About from './Router/About'
import { Menu } from 'semantic-ui-react'
class App extends Component {
  render() {
    return (
      <div className="ui container">
          <Router>
              <div>
                <h2>Welcome to React Router Tutorial</h2>
                <div class="ui secondary menu">
                  <Menu secondary>
                <ul>
                    <li><Link to={'/Home'}>Home</Link></li>
                    <li><Link to={'/About'}>About</Link></li>
                </ul>
                </Menu>
                </div>
                <hr />
                
                <Switch>
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/About' component={About} />
                </Switch>
              </div>
          </Router>        
        
      </div>
    );
  }
}

export default App;
