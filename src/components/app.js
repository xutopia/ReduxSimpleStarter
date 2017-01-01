import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {fetchVideos} from '../actions/index';
// import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
