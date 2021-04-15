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

interface Trail {
  x: number;
  y: number;
}

interface GameVariables {
  playerX: number;
  playerY: number;
  tileSize: number;
  tileCount: number;
  appleX: number;
  appleY: number;
  xVelocity: number;
  yVelocity: number;
  paused: boolean;
  trail: Trail[];
  tail: number;
  score: number;
  gameOver: boolean;
}

const defaultGameVariables: GameVariables = {
  playerX: 10,
  playerY: 10,
  tileSize: 20,
  tileCount: 400 / 20,
  appleX: 15,
  appleY: 15,
  xVelocity: 0,
  yVelocity: 0,
  paused: false,
  trail: [] as Trail[],
  tail: 5,
  score: 0,
  gameOver: false
};

let gameVariables = {...defaultGameVariables};

const SnakeGame = () => {
  const [size, setSize] = React.useState(400);

  const changeSize = (element: Option) => {
    setSize(parseInt(element.value));
    gameVariables.tileCount = parseInt(element.value) / gameVariables.tileSize;
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
    { value: "1000", label: "stor" }
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

const game = (context: CanvasRenderingContext2D) => {
  if (gameVariables.gameOver) {
    paintCanvasBlack(context);
    displayGameOverScreen(context);
    displayScore(context);
  } else if (gameVariables.paused) {
    paintCanvasBlack(context);
    displayPauseText(context);
    displayScore(context);
  } else {
    regenerateAppleIfOutsidePLayableArea(context);
    gameVariables.playerX += gameVariables.xVelocity;
    gameVariables.playerY += gameVariables.yVelocity;

    checkEdges();

    paintCanvasBlack(context);

    moveSnake(context);

    eatAndGenerateApple(context);
    displayScore(context);
  }
};

const paintCanvasBlack = (context: CanvasRenderingContext2D) => {
  context.fillStyle = "black";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
};

const drawText = (context: CanvasRenderingContext2D, text: string, font?: string, fillStyle?: string, textAllign?: CanvasTextAlign, x?: number, y?: number) => {
  context.font = font ? font : "30px Arial";
  context.fillStyle = fillStyle ? fillStyle : "red";
  context.textAlign = textAllign ? textAllign : "center";
  const xCoordinate = x ? x : context.canvas.width / 2
  const yCoordinate = y ? y : context.canvas.height / 2

  context.fillText(
    text,
    xCoordinate,
    yCoordinate
  );
}

const displayPauseText = (context: CanvasRenderingContext2D) => {
  const pausedText = "PAUSED!";

  drawText(context, pausedText);
};

const displayGameOverScreen = (context: CanvasRenderingContext2D) => {
  const gameOverText = "GAME OVER! :(";
  const scoreText = `You got ${gameVariables.score} points! :D`
  const newGameText = `Press Escape to start a new game`

  drawText(context, gameOverText);
  drawText(context, scoreText, "20px Arial", "green", "center", context.canvas.width / 2, (context.canvas.height / 2) + 40)
  drawText(context, newGameText, "15px Arial", "white", "center", context.canvas.width / 2, (context.canvas.height / 2) + 70)
};

const displayScore = (context: CanvasRenderingContext2D) => {
  const score = `${gameVariables.score}`;

  drawText(context, score, "20px Arial", "green", "right", context.canvas.width - 10, 20)
};

const checkEdges = () => {
  if (gameVariables.playerX < 0) {
    gameVariables.playerX = gameVariables.tileCount - 1;
  }

  if (gameVariables.playerX > gameVariables.tileCount - 1) {
    gameVariables.playerX = 0;
  }

  if (gameVariables.playerY < 0) {
    gameVariables.playerY = gameVariables.tileCount - 1;
  }

  if (gameVariables.playerY > gameVariables.tileCount - 1) {
    gameVariables.playerY = 0;
  }
};

const regenerateAppleIfOutsidePLayableArea = (
  context: CanvasRenderingContext2D
) => {
  if (gameVariables.appleX > gameVariables.tileCount || gameVariables.appleY > gameVariables.tileCount) {
    gameVariables.appleX = Math.floor(Math.random() * gameVariables.tileCount);
    gameVariables.appleY = Math.floor(Math.random() * gameVariables.tileCount);

    const img = document.getElementById("appleId") as CanvasImageSource;
    context.drawImage(
      img,
      gameVariables.appleX * gameVariables.tileSize,
      gameVariables.appleY * gameVariables.tileSize,
      gameVariables.tileSize - 2,
      gameVariables.tileSize - 2
    );
  }
};

const moveSnake = (context: CanvasRenderingContext2D) => {
  context.fillStyle = "lime";
  for (let i = 0; i < gameVariables.trail.length; i++) {
    context.fillRect(
      gameVariables.trail[i].x * gameVariables.tileSize,
      gameVariables.trail[i].y * gameVariables.tileSize,
      gameVariables.tileSize - 2,
      gameVariables.tileSize - 2
    );
    if (gameVariables.trail[i].x === gameVariables.playerX && gameVariables.trail[i].y === gameVariables.playerY && gameVariables.score !== 0) {
      gameVariables.gameOver = true;
      break;
    }
  }
  gameVariables.trail.push({ x: gameVariables.playerX, y: gameVariables.playerY });
  while (gameVariables.trail.length > gameVariables.tail) {
    gameVariables.trail.shift();
  }
};

const eatAndGenerateApple = (context: CanvasRenderingContext2D) => {
  if (gameVariables.appleX === gameVariables.playerX && gameVariables.appleY === gameVariables.playerY) {
    gameVariables.tail++;
    gameVariables.score++;
    gameVariables.appleX = Math.floor(Math.random() * gameVariables.tileCount);
    gameVariables.appleY = Math.floor(Math.random() * gameVariables.tileCount);
  }

  const img = document.getElementById("appleId") as CanvasImageSource;
  context.drawImage(
    img,
    gameVariables.appleX * gameVariables.tileSize,
    gameVariables.appleY * gameVariables.tileSize,
    gameVariables.tileSize - 2,
    gameVariables.tileSize - 2
  );
};

const keyPush = (evt: KeyboardEvent) => {
  switch (evt.key) {
    case "Escape":
      if (gameVariables.gameOver) {
        gameVariables = {...defaultGameVariables, tileCount: gameVariables.tileCount}
      }
      else {
        gameVariables.paused = !gameVariables.paused;
      }
      break;
    case "ArrowLeft":
      if (gameVariables.xVelocity < 1) {
        gameVariables.xVelocity = -1;
        gameVariables.yVelocity = 0;
      }
      break;
    case "ArrowUp":
      if (gameVariables.yVelocity < 1) {
        gameVariables.xVelocity = 0;
        gameVariables.yVelocity = -1;
      }
      break;
    case "ArrowRight":
      if (gameVariables.xVelocity > -1) {
        gameVariables.xVelocity = 1;
        gameVariables.yVelocity = 0;
      }
      break;
    case "ArrowDown":
      if (gameVariables.yVelocity > -1) {
        gameVariables.xVelocity = 0;
        gameVariables.yVelocity = 1;
      }
      break;
  }
};

export default SnakeGame;
