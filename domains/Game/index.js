import Link from "next/link";
import Card from "components/ui-kit/Atoms/Card";
import { Container } from "./style";
import { games } from "./data";

function GameView() {
  return (
    <>
      <h1>game time!</h1>
      <Container>
        {games.map(({ title, description, href }, i) => (
          <Link href={href} key={i.toString()}>
            <Card width="100%" className="card">
              <h3>{title}</h3>
              <p>{description}</p>
            </Card>
          </Link>
        ))}
      </Container>
    </>
  );
}

export default GameView;
