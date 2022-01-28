import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter
} from 'react-icons/ai';

import { IoIosArrowDropup } from 'react-icons/io';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          <div>
            <IoIosArrowDropup />
          </div>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com/bmsfrontend')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/BrunoMatosSilva')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/bmsfrontend')
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
