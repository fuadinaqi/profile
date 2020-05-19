import { useState, useEffect } from "react";
import { keys } from "./data";
import { Container, BlockContainer, Block } from "./style";

function shuffle(array, result, indexResult) {
  let tmp = null;
  let current = null;
  let top = array.length;
  if (top) {
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    array[indexResult] = result;
  }
  return array;
}

function MathBlocks({ back, data: { title, description } }) {
  const [ready, setReady] = useState(false);
  const [preventClick, setPreventClick] = useState(false);
  const [arrayNum, setArrayNum] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [rows] = useState(3);
  const [level, setLevel] = useState(1);
  const [stage, setStage] = useState(1);
  const [score, setScore] = useState(0);
  const rowColumns = Math.pow(rows, 2);
  const indexResult = Math.floor(Math.random() * rowColumns);
  const currentKey = keys[rows][level];
  const result = currentKey.result;

  useEffect(() => {
    setPreventClick(false);
    setArrayNum(shuffle(currentKey.random, result, indexResult));
  }, [rows, level]);

  useEffect(() => {
    if (ready && stage === 1) {
      setTimeout(() => {
        setStage((prevStage) => prevStage + 1);
      }, 3000);
    }
  }, [ready, stage]);

  useEffect(() => {
    if (stage === 3 && level < 3) {
      setTimeout(() => {
        setStage(1);
        setLevel((prevLevel) => prevLevel + 1);
      }, 2000);
    }
  }, [stage, level]);

  function onClickBlock(num) {
    return function () {
      setPreventClick(true);
      setStage((prevStage) => prevStage + 1);
      setAnswer(num);
      if (num === result) setScore((prevScore) => prevScore + 10);
    };
  }

  return (
    <Container>
      <h3 role="presentation" onClick={back}>{`< Back`}</h3>
      {!ready ? (
        <>
          <h1>{title}</h1>
          <p>{description}</p>
          <button onClick={() => setReady(true)}>Ready ?</button>
        </>
      ) : (
        <>
          <p>
            <strong>score : </strong>
            <strong>{score}</strong>
          </p>
          <h2>{stage > 1 ? currentKey.question : "Recognize this!"}</h2>
          <BlockContainer rows={rows}>
            {arrayNum.map((num, i) => {
              if (stage === 1) return <Block key={i.toString()}>{num}</Block>;
              if (answer === num)
                return (
                  <Block correct={answer === result} key={i.toString()}>
                    {num}
                  </Block>
                );
              return (
                <Block
                  key={i.toString()}
                  onClick={!preventClick ? onClickBlock(num) : () => null}
                />
              );
            })}
          </BlockContainer>
        </>
      )}
    </Container>
  );
}

export default MathBlocks;
