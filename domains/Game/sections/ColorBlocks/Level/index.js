import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Progress from "components/ui-kit/Atoms/Progress";
import { Container, P, BlockContainer, Block } from "./style";
import { levels } from "../data";
import { shuffle, substractPerTime, answerTime } from "./utils";
import { getInitialHighScore } from "../utils";

let timeout_1 = null;
let interval = null;

function ColorBlocksLevel() {
  const {
    query: { level },
  } = useRouter();
  const rows = levels[level].rows;
  const [ended, setEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [subLevel, setSubLevel] = useState(1);
  const [percentage, setPercentage] = useState(100);
  const [readyLevel, setReadyLevel] = useState(true);
  const [arrayBlocks, setArrayBlocks] = useState([]);
  const question = levels[level][rows][subLevel].question;
  const answer = levels[level][rows][subLevel].answer;

  const highScore = getInitialHighScore();

  useEffect(() => {
    return () => {
      clearTimeout(timeout_1);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setArrayBlocks(shuffle({ rows, question, answer }));
  }, [rows, question, answer]);

  useEffect(() => {
    setReadyLevel(false);
    setTimeout(() => {
      setReadyLevel(true);
    }, 1);
  }, [subLevel]);

  useEffect(() => {
    interval = setInterval(function () {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage - substractPerTime(100, answerTime[level]);
        if (newPercentage < 0) {
          clearInterval(interval);
          return 0;
        }
        return newPercentage;
      });
    }, 100);
    timeout_1 = setTimeout(function () {
      setEnded(true);
    }, answerTime[level]);
  }, [subLevel]);

  useEffect(() => {
    if (ended) {
      if (score > highScore[level]) {
        localStorage.setItem(
          "color_highscore",
          JSON.stringify({
            ...highScore,
            [level]: score,
          })
        );
      }
    }
  }, [ended, score]);

  function onClickBlock(color) {
    return function () {
      clearTimeout(timeout_1);
      clearInterval(interval);
      if (color === answer) {
        setSubLevel((prevSubLevel) => prevSubLevel + 1);
        setPercentage(100);
        setScore((prevScore) => prevScore + 10);
      } else {
        setEnded(true);
      }
    };
  }

  return (
    <Container>
      <Link href="/game/color-blocks">
        <a>
          <h3>{`< Back`}</h3>
        </a>
      </Link>
      <P triggerBig={ended}>
        <strong className="title">{`Color Blocks: Level ${level}`}</strong>
        <br />
        <strong>skor : </strong>
        <strong>{score}</strong>
      </P>
      {!ended && (
        <>
          {readyLevel ? (
            <Progress className="percentage" percentage={percentage} initialTransition={false} />
          ) : (
            <div className="gap" />
          )}
          <BlockContainer rows={rows}>
            {arrayBlocks.map((color, i) => (
              <Block key={i.toString()} color={color} onClick={onClickBlock(color)} />
            ))}
          </BlockContainer>
        </>
      )}
    </Container>
  );
}

export default ColorBlocksLevel;
