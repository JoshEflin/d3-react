import { useState } from 'react'

import './App.css'
import { Face} from './components/Face';
import { range } from 'd3';


const width = 960
const height = 500
const strokeWidth = 20;

const array = range(10)



const  App= () => array.map(()=>  (
   
  <Face
  width = {width}
  height = {height}
  centerX = {width/2}
  centerY = {height/2}
  strokeWidth = {strokeWidth}
  radius = {height / 2 - strokeWidth /2}
  eyeOffsetX = {120}
  eyeOffsetY = {70}
  eyeRadius = {10+ Math.random()*50}
  mouthWidth = {7+ Math.random()*90}
  mouthRadius = {30+ Math.random()*100} />
  )  
)


export default App
