import React from "react";
import Link from "next/link";
import Button from "components/ui-kit/Atoms/Button";
import { data, levels } from "./data";
import { Container } from "./style";
import { getInitialHighScore } from "./utils";

const { title, description } = data;

export default function ColorBlocks() {
  return (
    <Container>
      <Link href="/game">
        <h3>{`< Back`}</h3>
      </Link>
      <h1>{title}</h1>
      <p>{description}</p>
      {Object.keys(levels).map((level) => (
        <React.Fragment key={level.toString()}>
          <div className="button">
            <Link href="/game/color-blocks/[level]" as={`/game/color-blocks/${level}`}>
              <Button>{`Level ${level}`}</Button>
            </Link>
            <strong>{`Skor tertinggi : ${getInitialHighScore()[level]}`}</strong>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </Container>
  );
}
