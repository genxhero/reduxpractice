import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from './PrivateRoute.js';
import { history } from './helpers';
import { alertActions } from './actions';
import HomePage  from './components/HomePage';
import LoginPage  from './components/LoginPage';
import RegisterPage  from './components/RegisterPage';
import Fidget from './components/Fidget';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
        });
    }

    render() {
        const { alert } = this.props;
        return (
              <div className="container">
                  <Router history={history}>
                      <Switch>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/register" component={RegisterPage} />
                      </Switch>
                  </Router>
                <Fidget />
              </div>
        );
    }
}


function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export default connectedApp;