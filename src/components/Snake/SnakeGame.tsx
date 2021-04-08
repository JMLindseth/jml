import React, {useEffect} from "react";
import apple from "../../img/svg/apple.svg"
import styled from "styled-components";

const HiddenApple = styled.img`
  display: none;
`

const SnakeGame = () => {
  useEffect(() => {
    let element: HTMLCanvasElement = document.getElementById('gc') as HTMLCanvasElement
    let context = element.getContext("2d")
    document.addEventListener('keydown', keyPush);
    setInterval(() => game(context), 1000 / 15);
  }, [])

  return (<>
    <canvas id={'gc'} width={'400'} height={'400'}/>
    <HiddenApple id="appleId" src={apple}/>
  </>)
}

let playerX: number = 10
let playerY: number = 10
let gameScreen: number = 20
let tc: number = 20
let appleX: number = 15
let appleY: number = 15
let xVelocity: number = 0
let yVelocity: number = 0
let paused: boolean = false

let trail: any[] = [];
let tail: number = 5;

const pausedText = "PAUSED!"

const game = (context: any) => {
  if (paused) {
    context.font = "30px Arial";
    context.fillStyle = "red";
    context.textAlign = "center";
    context.fillText(pausedText, context.canvas.width / 2, context.canvas.height / 2);
  } else {
    playerX += xVelocity
    playerY += yVelocity

    checkEdges()

    context.fillStyle = "black";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    moveSnake(context);

    eatAndGenerateApple();

    const img = document.getElementById("appleId")
    context.drawImage(img, appleX * gameScreen, appleY * gameScreen, gameScreen - 2, gameScreen - 2)
  }
}

const checkEdges = () => {
  if (playerX < 0) {
    playerX = tc - 1
  }

  if (playerX > tc - 1) {
    playerX = 0
  }

  if (playerY < 0) {
    playerY = tc - 1
  }

  if (playerY > tc - 1) {
    playerY = 0
  }
}

const moveSnake = (context: any) => {
  context.fillStyle = "lime";
  for (let i = 0; i < trail.length; i++) {
    context.fillRect(trail[i].x * gameScreen, trail[i].y * gameScreen, gameScreen - 2, gameScreen - 2);
    if (trail[i].x === playerX && trail[i].y === playerY) {
      tail = 5;
    }
  }
  trail.push({x: playerX, y: playerY});
  while (trail.length > tail) {
    trail.shift();
  }
}

const eatAndGenerateApple = () => {
  if (appleX === playerX && appleY === playerY) {
    tail++;
    appleX = Math.floor(Math.random() * tc);
    appleY = Math.floor(Math.random() * tc);
  }
}

const keyPush = (evt: any) => {
  switch (evt.keyCode) {
    case 27:
      paused = !paused;
      break;
    case 37:
      if (xVelocity < 1) {
        xVelocity = -1;
        yVelocity = 0;
      }
      break;
    case 38:
      if (yVelocity < 1) {
        xVelocity = 0;
        yVelocity = -1;
      }
      break;
    case 39:
      if (xVelocity > -1) {
        xVelocity = 1;
        yVelocity = 0;
      }
      break;
    case 40:
      if (yVelocity > -1) {
        xVelocity = 0;
        yVelocity = 1;
      }
      break;
  }
}

export default SnakeGame;
