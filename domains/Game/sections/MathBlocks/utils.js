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
  if (!localStorage.getItem("highscore")) {
    return {
      2: 0,
      3: 0,
    };
  }
  return JSON.parse(localStorage.getItem("highscore"));
}
