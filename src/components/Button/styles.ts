import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`

button {
  background: ${({ theme }) => theme.primary};
  padding: 0.8rem 3rem;
  border-radius: 0.5rem;
  border: none;
  transition: 0.5s;
  margin-top: 2rem;

  &:hover {
    background: ${({ theme }) => darken(0.09, theme.primary)};
  }

  a {
    color: #fff;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 300;
  }

  @media (max-width: 700px) {
    padding: 0.7rem 2rem;

    a {
      font-size: 0.9rem;
    }
  }
}
`;
