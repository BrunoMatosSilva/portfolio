import { AiFillHtml5 } from 'react-icons/ai';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';
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
        <TecnologiaItem title="TypeScript" icon={<SiTypescript />} />
        <TecnologiaItem title="ReactJS" icon={<FaReact />} />
        <TecnologiaItem title="NextJS" icon={<SiNextdotjs />} />
      </section>
    </Container>
  );
}

export default Tecnologias;
