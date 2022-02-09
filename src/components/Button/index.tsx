import { Container } from './styles';

interface ButtonProps {
  link: string;
  description: string;
}

function ButtonNav({ link, description }: ButtonProps) {
  return (
    <Container>
      <button type="button">
        <a href={link}>{description}</a>
      </button>
    </Container>
  );
};

export default ButtonNav;
