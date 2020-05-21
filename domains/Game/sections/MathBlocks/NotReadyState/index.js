import Button from "components/ui-kit/Atoms/Button";
import { levels } from "../data";

export default function NotReadyState({ title, description, onClickLevel, highScore }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      {Object.keys(levels).map((level) => (
        <React.Fragment key={level.toString()}>
          <div className="button">
            <Button onClick={onClickLevel(level)}>{`Level ${level}`}</Button>
            <strong>{`Skor tertinggi : ${highScore[level]}`}</strong>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </>
  );
}
