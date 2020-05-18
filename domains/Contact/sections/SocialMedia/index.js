import { Container } from "./style";
import { socialMedia } from "./data";

function SocialMedia() {
  return (
    <Container>
      {socialMedia.map(({ name, content, isLink }, i) => (
        <div className="item" key={i.toString()}>
          <img width="20px" alt="phone" src={`/images/${name}.svg`} />
          {isLink ? (
            <a href={content} target="_blank">{`: ${content}`}</a>
          ) : (
            <div>{`: ${content}`}</div>
          )}
        </div>
      ))}
    </Container>
  );
}

export default SocialMedia;
