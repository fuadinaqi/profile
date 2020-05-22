import Link from "next/link";
import { data } from "./data";
import { Container } from "./style";

const { title, description } = data;

export default function ColorBlocks() {
  return (
    <Container>
      <Link href="/game">
        <a>
          <h3>{`< Back`}</h3>
        </a>
      </Link>
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  );
}
