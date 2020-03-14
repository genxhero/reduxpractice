import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions} from '../actions/user.actions';

 class HomePage extends Component {

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2 align="center">Welcome! You have successfully logged in.</h2>
                <p align="center">
                    <button onClick={userActions.logout}>
                    Log Out
                </button>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete,
    logout: userActions.logout
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export default connectedHomePage;