import { useState, useEffect, useRef } from "react";
import Progress from "components/ui-kit/Atoms/Progress";
import Blocks from "./Blocks";
import NotReadyState from "./NotReadyState";
import { levels } from "./data";
import { shuffle, time, substractPerTime, getInitialHighScore } from "./utils";
import { Container, BlockContainer, P } from "./style";

let timeout_1 = null;
let timeout_2 = null;
let timeout_3 = null;
let interval = null;

function MathBlocks({ back, data: { title, description } }) {
  const audioRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [ended, setEnded] = useState(false);
  const [preventClick, setPreventClick] = useState(false);
  const [arrayNum, setArrayNum] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [level, setLevel] = useState(1);
  const [rows, setRows] = useState(2);
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
      clearInterval(interval);
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
    if (ready && stage === 1) {
      interval = setInterval(function () {
        setPercentage((prevPercentage) => {
          const newPercentage = prevPercentage - substractPerTime(100, rows);
          if (newPercentage < 0) {
            clearInterval(interval);
            return 0;
          }
          return newPercentage;
        });
      }, 100);
      timeout_1 = setTimeout(function () {
        setStage((prevStage) => prevStage + 1);
      }, time[rows]);
    }
  }, [ready, stage]);

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
      }, 3000);
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
      if (num === result) {
        audioRef.current.src = "/audio/correct.mp3";
        setScore((prevScore) => prevScore + 10);
      } else {
        audioRef.current.src = "/audio/wrong.mp3";
      }
      audioRef.current.play();
    };
  }

  function onClickLevel(lvl) {
    return function () {
      setLevel(lvl);
      setRows(levels[lvl].rows);
      setReady(true);
    };
  }

  return (
    <Container>
      <audio ref={audioRef}>
        <source type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <h3 role="presentation" onClick={back}>{`< Back`}</h3>
      {!ready ? (
        <NotReadyState
          title={title}
          description={description}
          onClickLevel={onClickLevel}
          highScore={highScore}
        />
      ) : (
        <>
          <P triggerBig={ended}>
            <strong>skor : </strong>
            <strong>{score}</strong>
          </P>
          {!ended && (
            <>
              <h2>{stage > 1 ? question : "Hafalkan!"}</h2>
              {stage === 1 && (
                <Progress
                  className="percentage"
                  percentage={percentage}
                  initialTransition={false}
                />
              )}
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
        </>
      )}
    </Container>
  );
}

export default MathBlocks;
