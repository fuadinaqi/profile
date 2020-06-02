export function shuffle({ rows, question, answer }) {
  const blockLength = Math.pow(rows, 2);
  const randomIdx = Math.floor(Math.random() * blockLength);
  let blocks = new Array(blockLength).fill(question);
  blocks[randomIdx] = answer;
  return blocks;
}

export const answerTime = {
  1: 3000,
  2: 5000,
  3: 6000,
};

export function substractPerTime(miliseconds, t) {
  return 100 / ((t - 1000) / miliseconds);
}
