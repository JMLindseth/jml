import React, { useEffect } from "react";
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
        <HiddenApple id="appleId" src={apple} />
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
let tempXVelocity = 0
let tempYVelocity = 0

let trail: any[] = [];
let tail: number = 5;

const game = (context: any) => {
    playerX += xVelocity
    playerY += yVelocity

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

    context.fillStyle = "black";
    context.fillRect(0, 0, 400, 400);

    context.fillStyle = "lime";
    for (let i = 0; i < trail.length; i++) {
        context.fillRect(trail[i].x * gameScreen, trail[i].y * gameScreen, gameScreen - 2, gameScreen - 2);
        if (trail[i].x === playerX && trail[i].y === playerY && !paused) {
            tail = 5;
        }
    }
    trail.push({x: playerX, y: playerY});
    while (trail.length > tail && !paused) {
        trail.shift();
    }

    if (appleX === playerX && appleY === playerY) {
        tail++;
        appleX = Math.floor(Math.random() * tc);
        appleY = Math.floor(Math.random() * tc);
    }

    const img = document.getElementById("appleId")
    context.drawImage(img, appleX * gameScreen, appleY * gameScreen, gameScreen - 2, gameScreen - 2)
}

const keyPush = (evt: any) => {
    switch (evt.keyCode) {
        case 27:
            console.log('27! Esc ', paused);
            if (!paused) {
                paused = true
                tempXVelocity = xVelocity
                tempYVelocity = yVelocity
                xVelocity = 0;
                yVelocity = 0
            } else {
                paused = false
                console.log('X: ', tempXVelocity, ' Y: ', tempYVelocity);
                xVelocity = tempXVelocity
                yVelocity = tempYVelocity
            }
            break;
        case 37:
            console.log('37! Venstre ', paused);
            if (xVelocity < 1 && !paused) {
                xVelocity = -1;
                yVelocity = 0;
            }
            break;
        case 38:
            console.log('38! Opp ', paused);
            if (yVelocity < 1 && !paused) {
                xVelocity = 0;
                yVelocity = -1;
            }
            break;
        case 39:
            console.log('39! Høyre ', paused);
            if (xVelocity > -1 && !paused) {
                xVelocity = 1;
                yVelocity = 0;
            }
            break;
        case 40:
            console.log('40! Ned ', paused);
            if (yVelocity > -1 && !paused) {
                xVelocity = 0;
                yVelocity = 1;
            }
            break;
    }
}

export default SnakeGame;