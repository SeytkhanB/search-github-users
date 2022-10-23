import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;

  &::before {
    content: " followers";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  .followers {
    overflow: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }
  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    a {
      color: var(--clr-primary-5);
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }

  .not-followers-img {
    text-align: center;
    display: block;
    margin: 0 auto;
    margin-top: 25px;
    width: 15em;
  }
  .not-followers {
    font-size: 1.2rem;
    margin-top: 10px;
    text-align: center;
    color: var(--clr-grey-4);
  }

  @media (max-width: 481px) {
    .followers {
      padding: 0.5rem 0.5rem;
    }
    article {
      grid-template-columns: auto;
      img {
        width: 30px;
        height: 30px;
      }
      h4 {
        font-size: .7rem;
      }
      a {
        font-size: .5rem;
      }
    }
  }
`;

export default Wrapper;
