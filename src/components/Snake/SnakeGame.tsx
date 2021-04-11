import React, { useEffect } from "react";
import apple from "../../img/svg/apple.svg";
import styled from "styled-components";
import Dropdown, { Option } from "react-dropdown";

const HiddenApple = styled.img`
  display: none;
`;

const SmallDropdown = styled(Dropdown)`
  width: 10em;
  margin-left: auto;
`;

const SnakeGame = () => {
  const [size, setSize] = React.useState(400);

  const changeSize = (element: Option) => {
    setSize(parseInt(element.value));
    tileCount = parseInt(element.value) / 20;
  };

  useEffect(() => {
    let element: HTMLCanvasElement = document.getElementById(
      "gc"
    ) as HTMLCanvasElement;
    let context = element.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(() => game(context), 1000 / 15);
  }, []);

  const options: Option[] = [
    { value: "400", label: "liten" },
    { value: "600", label: "medium" },
    { value: "1000", label: "stor" },
  ];

  return (
    <>
      <SmallDropdown
        options={options}
        onChange={(e) => changeSize(e)}
        placeholder="Velg størrelse"
      />
      <canvas id={"gc"} width={size} height={size} />
      <HiddenApple id="appleId" src={apple} />
    </>
  );
};

let playerX: number = 10;
let playerY: number = 10;
let tileSize: number = 20;
let tileCount: number = 400 / 20;
let appleX: number = 15;
let appleY: number = 15;
let xVelocity: number = 0;
let yVelocity: number = 0;
let paused: boolean = false;

let trail: any[] = [];
let tail: number = 5;

const game = (context: any) => {
  if (paused) {
    paintCanvasBlack(context);
    displayPauseText(context);
  } else {
    regenerateAppleIfOutsidePLayableArea(context);
    playerX += xVelocity;
    playerY += yVelocity;

    checkEdges();

    paintCanvasBlack(context);

    moveSnake(context);

    eatAndGenerateApple(context);
  }
};

const paintCanvasBlack = (context: any) => {
  context.fillStyle = "black";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
};

const displayPauseText = (context: any) => {
  const pausedText = "PAUSED!";

  context.font = "30px Arial";
  context.fillStyle = "red";
  context.textAlign = "center";
  context.fillText(
    pausedText,
    context.canvas.width / 2,
    context.canvas.height / 2
  );
};

const checkEdges = () => {
  if (playerX < 0) {
    playerX = tileCount - 1;
  }

  if (playerX > tileCount - 1) {
    playerX = 0;
  }

  if (playerY < 0) {
    playerY = tileCount - 1;
  }

  if (playerY > tileCount - 1) {
    playerY = 0;
  }
};

const regenerateAppleIfOutsidePLayableArea = (context: any) => {
  if (appleX > tileCount || appleY > tileCount) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);

    const img = document.getElementById("appleId");
    context.drawImage(
      img,
      appleX * tileSize,
      appleY * tileSize,
      tileSize - 2,
      tileSize - 2
    );
  }
};

const moveSnake = (context: any) => {
  context.fillStyle = "lime";
  for (let i = 0; i < trail.length; i++) {
    context.fillRect(
      trail[i].x * tileSize,
      trail[i].y * tileSize,
      tileSize - 2,
      tileSize - 2
    );
    if (trail[i].x === playerX && trail[i].y === playerY) {
      tail = 5;
    }
  }
  trail.push({ x: playerX, y: playerY });
  while (trail.length > tail) {
    trail.shift();
  }
};

const eatAndGenerateApple = (context: any) => {
  if (appleX === playerX && appleY === playerY) {
    tail++;
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
  }

  const img = document.getElementById("appleId");
  context.drawImage(
    img,
    appleX * tileSize,
    appleY * tileSize,
    tileSize - 2,
    tileSize - 2
  );
};

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
};

export default SnakeGame;
