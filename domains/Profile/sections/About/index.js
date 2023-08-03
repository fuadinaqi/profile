import { Container } from "./style";

function ProfileAbout() {
  return (
    <Container>
      <h1>about me</h1>
      <strong>
        <em>{`${new Date().getFullYear() - 1995} years old`}</em>
        <span>/</span>
        <em>Indonesia</em>
        <span>/</span>
        <em>Frontend</em>
      </strong>
      <p>
        I am a Frontend Engineer who adheres to the principles of S.O.L.I.D (Single Responsibility,
        Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion). I have
        experience in small and big things related to Frontend Engineering. I easily work with teams
        with various methods (Agile or Waterfall method). The Frontend's UI Builder that I'm very
        good at is the React.ts library, but some of my projects use other frameworks like Vue.js
        and Angular.
      </p>
    </Container>
  );
}

export default ProfileAbout;
