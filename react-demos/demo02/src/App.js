import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions';
import { connect } from 'react-redux'

class App extends Component {

    componentDidMount = () =>{
        const { dispatch} = this.props;
        dispatch({type: actions.LOAD_USER_FETCHING});
    }

    render() {
        const {data, message}  = this.props;
        let children = null;
        if(data){
            children = data.map(({ id, name},index)=>(<li key={index}>{name}</li>))
        }

        let msg = null;
        if(message) {
            msg = <div>{message}</div>
        }
        return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            </header>
            <ul>
                {children}
            </ul>
            {msg}
        </div>
        );
    }
}

export default connect(root=> {
    return root;
})(App);
