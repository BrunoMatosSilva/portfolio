import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <a
          href="https://my.forms.app/form/627523b3b838185b935d451a"
          target="_blank"
        >
          Orçamento
        </a>
      </ul>
    </Container>
  );
};

export default Header;
