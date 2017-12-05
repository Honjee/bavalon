import React, { Component } from 'react';
import logo from './logo.svg';
import './avalon.css';
import $ from 'jquery';

class Avalon extends Component {
  render() {
    $.ajax({
      url: 'http://localhost:3001/v1/users',
      data: {
        user: {
          username: 'rdfsffssdfsoyfasdfcdffasdfde',
          password: '123456',
          is_admin: false
        }},
      method: 'POST'
    }).then(e => {
      debugger
    });

    $.ajax({
      url: 'http://localhost:3001/v1/users',
      method: 'GET'
    }).then(e => {
      debugger
    })

    debugger
    return (
      <div className="Avalon">
        <header className="Avalon-header">
          <img src={logo} className="Avalon-logo" alt="logo" />
          <h1 className="Avalon-title">Welcome to React</h1>
        </header>
        <p className="Avalon-intro">
          To get started, edit <code>src/Avalon.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Avalon;
