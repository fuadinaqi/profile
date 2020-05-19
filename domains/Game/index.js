import { useState } from "react";
import Card from "components/ui-kit/Card";
import MathBlocks from "./sections/MathBlocks";
import { Container } from "./style";
import { games } from "./data";

function GameView() {
  const [game, setGame] = useState("");
  const [data, setData] = useState({ title: "", description: "" });

  function back() {
    setGame(null);
  }

  function onClickCard(name, desc) {
    return function () {
      setGame(name);
      setData({ title: name, description: desc });
    };
  }

  switch (game) {
    case "Math Blocks":
      return <MathBlocks back={back} data={data} />;
    default:
      return (
        <>
          <h1>game time!</h1>
          <Container>
            {games.map(({ title, description }, i) => (
              <Card
                key={i.toString()}
                width="100%"
                className="card"
                role="presentation"
                onClick={onClickCard(title, description)}
              >
                <h3>{title}</h3>
                <p>{description}</p>
              </Card>
            ))}
          </Container>
        </>
      );
  }
}

export default GameView;
