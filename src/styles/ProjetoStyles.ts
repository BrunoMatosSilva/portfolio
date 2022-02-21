import styled from 'styled-components';

export const ProjetoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1.2rem;
      font-weight: 300;
      text-align: justify;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      margin-top: 1rem;
      font-size: 2.5rem;
      font-weight: bold;
    }

    ul {
      margin-top: 1rem;

      li {
        color: ${({ theme }) => theme.textLight};
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        margin-left: 1rem;
        list-style-type: circle;
      }
    }

    @media (max-width: 700px) {
      padding: 0 2.5rem;

      p {
        font-size: 1rem;
      }

      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;
