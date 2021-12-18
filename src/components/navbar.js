import React from 'react';
import LoginForm from './LoginForm';

let e = React.createElement;

export default class NavBar extends React.Component {
    render() {
        return <div class="container">
            <h3 className="d-flex justify-content-center">Welcome to my login form!</h3>
            <nav class="navbar navbar-light bg-light">
            <a href="index.html">Nav1</a>
            <a href="index.html">Nav2</a>
            <a href="index.html">Nav3</a>
            <a href="index.html">Nav4</a>
            </nav>
            <LoginForm/>
        </div>;
      }
}