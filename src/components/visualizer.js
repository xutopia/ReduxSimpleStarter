import React, {Component} from 'react';
import {Link} from 'react-router';
import * as THREE from '../../node_modules/three/build/three.min.js';

class Visualizer extends Component {

  wholeLottaShit() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.TorusGeometry(13, 3, 80, 100);
    var material = new THREE.MeshBasicMaterial({color: 0x3192ed, wireframe: true});
    var torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    camera.position.z = 75;

    var context = new AudioContext();

    var audioElement = this.refs.aud;

    var analyser = context.createAnalyser();

    (function() {
      var source = context.createMediaElementSource(audioElement);

      source.connect(analyser);
      analyser.connect(context.destination);
    })();

    analyser.fftSize = 64;


    var frequencyData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(frequencyData);


    var stop = false;
    var frameCount = 0;
    var fps, fpsInterval, startTime, now, then, elapsed;

    startAnimating(1);

    function startAnimating(fps) {
      fpsInterval = 1000 /fps;
      then = Date.now();
      startTime = then;
      render();
    }

    function convertIntToHexColor(...rgb) {
      var hex = rgb.map((color) => color.toString(16)).join('');
      return `0x${hex}`;
    }

    function render() {

      requestAnimationFrame(render);

      analyser.getByteFrequencyData(frequencyData);

      now = Date.now();
      elapsed = now - then;

      if(elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        if(frequencyData[0] !== 0) {
          torus.rotation.x += 0.01;
          torus.rotation.y += 0.01;
        }

        torus.scale.x = frequencyData[3] / 100
        torus.scale.y = frequencyData[5] / 100
        torus.scale.z = frequencyData[7] / 100

        torus.material.color.setHex(convertIntToHexColor(frequencyData[8], frequencyData[24], frequencyData[31]));
        renderer.render(scene, camera);
      }

    }

    render();
  }


  render() {
    return (
      <div>
        <audio controls="controls" ref="aud" autoPlay>
          <source src="http://127.0.0.1:8000/ShakeItOff.mp3" type="audio/mpeg"/>
        </audio>
        <button onClick={() => this.wholeLottaShit()}>Visualize</button>
        <Link to="/" className="btn btn-primary btn-lg">Back To Safety!</Link>

      <div>{this.printfn}</div>
      </div>
    );
  }

}

export default Visualizer;
