import { Container } from "./style";

function Card({ width, height, children, ...props }) {
  return (
    <Container width={width} height={height} {...props}>
      {children}
    </Container>
  );
}

export default Card;
