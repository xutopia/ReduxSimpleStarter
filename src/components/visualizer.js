import React, {Component} from 'react';
import {Link} from 'react-router';

class Visualizer extends Component {

  render() {
    console.log('inside the visualizer route');
    return (
      <html>
          <head>
              <title>Song Visualizer</title>
          </head>

          <body>
              <audio controls id="player">
                  <source src="ShakeItOff.mp3" type="audio/mpeg" />
              </audio>
              <script src="./three.min.js"></script>
              <script src="./starter.js"></script>
              <script src="./audio.js"></script>
              <script>
                  context.crossOrigin = 'anonymous';
              </script>
          </body>
      </html>
    );
  }

}



export default Visualizer;
