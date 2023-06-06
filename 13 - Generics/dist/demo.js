"use strict";
// pra o react não pensar que o <T> é um JSX, bota uma virgula
const getRandElement = (list) => {
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
};
