import { levels } from "./data";

export function shuffle(arr) {
  let array = [...arr];
  let tmp = null;
  let current = null;
  let top = array.length;
  while (--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

// in miliseconds
export const time = {
  2: 2000,
  3: 8000,
};

export function substractPerTime(miliseconds, rows) {
  return 100 / ((time[rows] - 1000) / miliseconds);
}

export function getInitialHighScore() {
  const obj = {};
  for (let i in levels) {
    obj[i] = 0;
  }
  if (localStorage.getItem("highscore")) {
    const parseHighscore = JSON.parse(localStorage.getItem("highscore"));
    if (Object.keys(parseHighscore).length > 2) return parseHighscore;
    const highscore = {
      ...obj,
      1: parseHighscore[2],
      3: parseHighscore[3],
    };
    localStorage.setItem("highscore", JSON.stringify(highscore));
    return highscore;
  }
  return obj;
}
