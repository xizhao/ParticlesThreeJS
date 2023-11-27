import * as THREE from 'three'
import { render, events } from '@react-three/fiber'
import './styles.css'
import App from './App'

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('canvas'),
  antialias: true,
  alpha: true
})
renderer.setClearColor( 0xffffff, 0);
render(<App />, document.querySelector('canvas'), {
  events,
  linear: true,
  camera: { fov: 25, position: [0, 0, 6] },
  // https://barradeau.com/blog/?p=621
  // This examples needs WebGL1 (?)
  gl: renderer,
  size: {
    width: 800,
    height: 400
  }
})
