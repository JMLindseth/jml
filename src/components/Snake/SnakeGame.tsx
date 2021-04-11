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
    const element: HTMLCanvasElement = document.getElementById(
      "gc"
    ) as HTMLCanvasElement;
    const context = element.getContext("2d") as CanvasRenderingContext2D;
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

let playerX = 10;
let playerY = 10;
const tileSize = 20;
let tileCount: number = 400 / 20;
let appleX = 15;
let appleY = 15;
let xVelocity = 0;
let yVelocity = 0;
let paused = false;

interface TrailType {
  x: number;
  y: number;
}

const trail: TrailType[] = [];
let tail = 5;

const game = (context: CanvasRenderingContext2D) => {
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

const paintCanvasBlack = (context: CanvasRenderingContext2D) => {
  context.fillStyle = "black";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
};

const displayPauseText = (context: CanvasRenderingContext2D) => {
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

const regenerateAppleIfOutsidePLayableArea = (
  context: CanvasRenderingContext2D
) => {
  if (appleX > tileCount || appleY > tileCount) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);

    const img = document.getElementById("appleId") as CanvasImageSource;
    context.drawImage(
      img,
      appleX * tileSize,
      appleY * tileSize,
      tileSize - 2,
      tileSize - 2
    );
  }
};

const moveSnake = (context: CanvasRenderingContext2D) => {
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

const eatAndGenerateApple = (context: CanvasRenderingContext2D) => {
  if (appleX === playerX && appleY === playerY) {
    tail++;
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
  }

  const img = document.getElementById("appleId") as CanvasImageSource;
  context.drawImage(
    img,
    appleX * tileSize,
    appleY * tileSize,
    tileSize - 2,
    tileSize - 2
  );
};

const keyPush = (evt: KeyboardEvent) => {
  console.log("KEY: ", evt.key, " CODE: ", evt.code);
  switch (evt.key) {
    case "Escape":
      paused = !paused;
      break;
    case "ArrowLeft":
      if (xVelocity < 1) {
        xVelocity = -1;
        yVelocity = 0;
      }
      break;
    case "ArrowUp":
      if (yVelocity < 1) {
        xVelocity = 0;
        yVelocity = -1;
      }
      break;
    case "ArrowRight":
      if (xVelocity > -1) {
        xVelocity = 1;
        yVelocity = 0;
      }
      break;
    case "ArrowDown":
      if (yVelocity > -1) {
        xVelocity = 0;
        yVelocity = 1;
      }
      break;
  }
};

export default SnakeGame;
