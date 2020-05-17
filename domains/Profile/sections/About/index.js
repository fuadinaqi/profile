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
        <em>Developer</em>
      </strong>
      <p>
        Professional Programmer. Data technology, IoT, Machine Learning, AR, and VR enthusiast. Fast
        Learner. A Full-stack javascript developer who have certified skills in NodeJS, ES5, ES6,
        VueJS, Vuex, ReactJS, React-Native, Redux, RESTful-API NodeJS by Hacktiv8 Indonesia.
      </p>
    </Container>
  );
}

export default ProfileAbout;
