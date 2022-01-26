import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import TecnologiaItem from './TecnologiaItem';

function Tecnologias() {
  return (
    <Container>
      <SectionTitle title="Tecnologias" />
      <section>
        <TecnologiaItem title="HTML" icon={<AiFillHtml5 />} />
        <TecnologiaItem title="CSS" icon={<FaCss3Alt />} />
        <TecnologiaItem title="Javascript" icon={<IoLogoJavascript />} />
        <TecnologiaItem title="React" icon={<FaReact />} />
      </section>
    </Container>
  );
}

export default Tecnologias;
