import styled from "styled-components";
import NotFoundImg from "../../images/not-found.svg";

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  background: var(--clr-primary-10);
  background: url(${NotFoundImg}) no-repeat center center fixed;
  background-size: 200em 75%;
  h1 {
    font-size: 10rem;
    color: var(--clr-primary-3);
  }
  h3 {
    color: black;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 600px) {
    background-size: 150em 50%;
    h1 {
      font-size: 6rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;

export default Wrapper;
