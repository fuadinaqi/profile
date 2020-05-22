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

export const answerTime = {
  1: 3000,
  2: 5000,
  3: 6000,
};

export function substractPerTime(miliseconds, t) {
  return 100 / ((t - 1000) / miliseconds);
}
