

import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ExperienceItem';
import { Container } from './styles';

function Conhecimento() {
  return (
    <Container>
      <SectionTitle title="Conhecimento" description="o aprendizado nunca tem fim." />

      <section>
        <ConhecimentoItem year={2013} title="Graduação" description="Bacharel em Sistema da Informação" />
        <ConhecimentoItem year={2021} title="Curso Alura" description="Curso básico de Front-End" />
        <ConhecimentoItem year={2021} title="Curso Rocketseat" description="Curso Ignite Trilha de React JS" />
        <ConhecimentoItem year={2022} title="Curso Rocketseat" description="Curso Ignite Trilha de Node JS" />
      </section>
    </Container>
  );
};

export default Conhecimento;
