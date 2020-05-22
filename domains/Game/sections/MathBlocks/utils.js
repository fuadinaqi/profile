import { levels } from "./data";

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
