import { Container, ProfileContainer } from "./style";

function Photo() {
  return (
    <Container>
      <img height="100%" src="/images/fuadi.jpg" />
      <ProfileContainer>
        <h1>Fuadi Naqi</h1>
        <div className="text-wrapper">
          <h3 className="primary">Frontend Engineer</h3>
        </div>
      </ProfileContainer>
    </Container>
  );
}

export default Photo;
