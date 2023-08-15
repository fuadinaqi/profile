import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Progress from "components/ui-kit/Atoms/Progress";
import Blocks from "./Blocks";
import { levels } from "../data";
import { shuffle, time, substractPerTime, answerTime } from "./utils";
import { getInitialHighScore } from "../utils";
import { Container, BlockContainer, P } from "./style";

let timeout_1 = null;
let timeout_2 = null;
let timeout_3 = null;
let interval_1 = null;
let interval_2 = null;

function MathBlocksLevel() {
  const router = useRouter();
  const level = router?.query?.level || 1;
  const rows = levels[level].rows;
  const audioRef = useRef(null);
  const [ended, setEnded] = useState(false);
  const [preventClick, setPreventClick] = useState(false);
  const [arrayNum, setArrayNum] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [subLevel, setSubLevel] = useState(1);
  const [stage, setStage] = useState(1);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(null);
  const [percentage, setPercentage] = useState(100);

  const highScore = getInitialHighScore();

  useEffect(() => {
    return () => {
      clearTimeout(timeout_1);
      clearTimeout(timeout_2);
      clearTimeout(timeout_3);
      clearInterval(interval_1);
      clearInterval(interval_2);
    };
  }, []);

  useEffect(() => {
    const rowColumns = Math.pow(rows, 2);
    const currentKey = levels[level][rows][subLevel];
    const indexResult = Math.floor(Math.random() * rowColumns);
    setPreventClick(false);
    setArrayNum(shuffle(currentKey.answers));
    setQuestion(currentKey.questions[indexResult]);
    setResult(currentKey.answers[indexResult]);
  }, [level, rows, subLevel]);

  useEffect(() => {
    if (stage === 1) {
      interval_1 = setInterval(function () {
        setPercentage((prevPercentage) => {
          const newPercentage = prevPercentage - substractPerTime(100, time[rows]);
          if (newPercentage < 0) {
            clearInterval(interval_1);
            return 0;
          }
          return newPercentage;
        });
      }, 100);
      timeout_1 = setTimeout(function () {
        setStage((prevStage) => prevStage + 1);
      }, time[rows]);
    } else if (stage === 2) {
      interval_2 = setInterval(function () {
        setPercentage((prevPercentage) => {
          const newPercentage = prevPercentage + substractPerTime(100, answerTime[level]);
          if (newPercentage > 100) {
            clearInterval(interval_2);
            return 100;
          }
          return newPercentage;
        });
      }, 100);
      timeout_1 = setTimeout(function () {
        setStage((prevStage) => prevStage + 1);
      }, answerTime[level]);
    }
  }, [stage]);

  useEffect(() => {
    if (stage === 3 && subLevel < 10) {
      timeout_2 = setTimeout(function () {
        resetState();
      }, 2000);
    } else if (stage === 3 && subLevel === 10) {
      timeout_3 = setTimeout(() => {
        setEnded(true);
        audioRef.current.src = "/audio/applause.mp3";
        audioRef.current.play();
        if (score > highScore[level]) {
          localStorage.setItem(
            "highscore",
            JSON.stringify({
              ...highScore,
              [level]: score,
            })
          );
        }
      }, answerTime[level]);
    }
  }, [stage, subLevel]);

  function resetState() {
    setStage(1);
    setSubLevel((prevLevel) => prevLevel + 1);
    setAnswer("");
    setPercentage(100);
  }

  function onClickBlock(num) {
    return function () {
      setPreventClick(true);
      setStage((prevStage) => prevStage + 1);
      setAnswer(num);
      clearTimeout(timeout_1);
      if (num === result) {
        audioRef.current.src = "/audio/correct.mp3";
        setScore((prevScore) => prevScore + 10);
      } else {
        audioRef.current.src = "/audio/wrong.mp3";
      }
      audioRef.current.volume = 0.01;
      audioRef.current.play();
    };
  }

  return (
    <Container>
      <audio ref={audioRef}>
        <source type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Link href="/game/math-blocks">
        <h3>{`< Back`}</h3>
      </Link>
      <P triggerBig={ended}>
        <strong className="title">{`Math Blocks: Level ${level}`}</strong>
        <br />
        <strong>skor : </strong>
        <strong>{score}</strong>
      </P>
      {!ended && (
        <>
          <h2>{stage > 1 ? question : "Hafalkan!"}</h2>
          <Progress className="percentage" percentage={percentage} initialTransition={false} />
          <BlockContainer rows={rows}>
            <Blocks
              arrayNum={arrayNum}
              stage={stage}
              answer={answer}
              result={result}
              preventClick={preventClick}
              onClickBlock={onClickBlock}
            />
          </BlockContainer>
        </>
      )}
    </Container>
  );
}

export default MathBlocksLevel;
