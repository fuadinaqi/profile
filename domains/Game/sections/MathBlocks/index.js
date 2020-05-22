import Link from "next/link";
import Button from "components/ui-kit/Atoms/Button";
import { getInitialHighScore } from "./utils";
import { levels, data } from "./data";
import { Container } from "./style";

const { title, description } = data;

export default function MathBlocks() {
  return (
    <Container>
      <Link href="/game">
        <a>
          <h3>{`< Back`}</h3>
        </a>
      </Link>
      <h1>{title}</h1>
      <p>{description}</p>
      {Object.keys(levels).map((level) => (
        <React.Fragment key={level.toString()}>
          <div className="button">
            <Link href="/game/math-blocks/[level]" as={`/game/math-blocks/${level}`}>
              <a>
                <Button>{`Level ${level}`}</Button>
              </a>
            </Link>
            <strong>{`Skor tertinggi : ${getInitialHighScore()[level]}`}</strong>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </Container>
  );
}
