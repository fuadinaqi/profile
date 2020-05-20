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
export const time = 2000;

export function substractPerTime(miliseconds) {
  return 100 / ((time - 1000) / miliseconds);
}
