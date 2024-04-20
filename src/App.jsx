import { useEffect } from 'react'

import './App.css'
import * as CANNON from 'cannon-es'
import Player from './Player.js';

import GameManager from './GameManager.js';
import {handleKeyDown, handleKeyUp} from './EventHandelers.js';
import PongScene from './PongScene.js';
import { inGameObjects } from './InGameObjects.js';
import Constants from './Constants.js';
import UIManager from './UIManager.js';
import Events from './Events.js';

function App() {
  useEffect(() => {
    //const players = []
    const uimanager = new UIManager()
    let playerLeft = new Player(inGameObjects.paddleLeft, "user1")
    let playerRight = new Player(inGameObjects.paddleRight, "user2")
    //let playerNumber = undefined
    const game = new PongScene('canvas', inGameObjects.ball, inGameObjects.paddleLeft, inGameObjects.paddleRight, playerLeft, playerRight);
    game.initialize();
    
    Constants.buttonStart.onclick = () => {
      //playerLeft.ResetScore();
      //playerRight.ResetScore();
      dispatchEvent(Events["reset"])
      inGameObjects.ball.SetDirection(Constants.ballStartDir);
      inGameObjects.ball.SetPosition(Constants.ballStartPosition);
      GameManager.StartGame(game.animate.bind(game));
    }
    
    window.addEventListener('hitLeftWall', (e) => {
      console.log("hitLeftWall")
      playerRight.HitWall()
    }, false)
    window.addEventListener('hitRightWall', (e) => {
      playerLeft.HitWall()
    }, false)
    window.addEventListener('stopGame', (e) => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      console.log("stopp received");
    }, false)
    
    window.addEventListener('startGame', (e) => {
      window.addEventListener('keydown', handleKeyDown ,false);
      window.addEventListener('keyup',handleKeyUp,false);
      console.log("game starts")
    }, false)

    window.addEventListener('playersSet', (e) => {
      GameManager.StartGame(game.animate.bind(game));
    })


    
  }, []);


  return (
    <>
      <canvas id="canvas"></canvas>
    </>
  )
}

export default App
