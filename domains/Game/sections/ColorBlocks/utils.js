import { levels } from "./data";

export function getInitialHighScore() {
  const obj = {};
  for (let i in levels) {
    obj[i] = 0;
  }
  if (localStorage.getItem("color_highscore")) {
    const parseHighscore = JSON.parse(localStorage.getItem("color_highscore"));
    if (Object.keys(parseHighscore).length > 2) return parseHighscore;
    const highscore = {
      ...obj,
      1: parseHighscore[1],
    };
    localStorage.setItem("color_highscore", JSON.stringify(highscore));
    return highscore;
  }
  return obj;
}
