import React from 'react';
import Username from './username';
import Password from './password';

let e = React.createElement;

export default class LoginForm extends React.Component {
    render() {

        return (
            <div className="card w-75">
                <h4>In ugly fashion, here's my form</h4>
                  <Username/>
                  <Password/>
            </div>

        );
    }
}