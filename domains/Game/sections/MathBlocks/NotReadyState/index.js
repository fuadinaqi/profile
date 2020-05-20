import Button from "components/ui-kit/Atoms/Button";

export default function NotReadyState({ title, description, onClickLevel, highScore }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="button">
        <Button onClick={onClickLevel(2)}>Level 1</Button>
        <strong>{`Skor tertinggi : ${highScore[2]}`}</strong>
      </div>
      <hr />
      <div className="button">
        <Button onClick={onClickLevel(3)}>Level 2</Button>
        <strong>{`Skor tertinggi : ${highScore[3]}`}</strong>
      </div>
    </>
  );
}
