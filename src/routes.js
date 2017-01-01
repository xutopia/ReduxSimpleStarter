import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import VideoIndex from './components/video_index';
import Visualizer from './components/visualizer';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={VideoIndex} />
    <Route path="visualizer" component={Visualizer} />
  </Route>
)
