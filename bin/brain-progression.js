#!/usr/bin/env node

import userMessages from '../src/index.js';

const rulesOfGame = 'What number is missing in the progression?';

const getRandom = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const arithmeticProgression = (arr, start, length) => {
    arr.push(start);
    for (let i = 1; i < length; i+=1) {
        let value = start += 2
        arr.push(value);
    }
}

const randomNumberFromProgression = (arr) => {
    const randomIndex = getRandom(1, arr.length - 1);
    const randomIndexValue = arr[randomIndex];
    arr[randomIndex] = '..';
    return randomIndexValue;
}

const gameRound = () => {
    const arrayProgression = [];
    let startNumber = getRandom(1, 3);
    const randomLength = getRandom(5, 10);
    arithmeticProgression(arrayProgression, startNumber, randomLength);
    const result = randomNumberFromProgression(arrayProgression);
    const question = `${arrayProgression}`;
    const correctAnswer = String(result);
    return [question, correctAnswer];
};

userMessages(rulesOfGame, gameRound);

