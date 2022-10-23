import styled from "styled-components";

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 2rem;
  background: var(--clr-white);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  .user-img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .welcome-img {
    width: 15%;
  }
  @media (min-width: 1200px) {
    .welcome-img {
      width: 180px;
    }
  }
  @media (max-width: 420px) {
    h4 {
      font-size: .7rem;
    }
    .user-img {
      width: 25px !important;
      height: 25px;
    }
    button {
      font-size: .6rem;
    }
    .welcome-img {
      width: 55px;
    }
  }
`;

export default Wrapper;
