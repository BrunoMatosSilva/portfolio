

import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ExperienceItem';
import { Container } from './styles';

function Conhecimento() {
  return (
    <Container>
      <SectionTitle title="Conhecimento" description="o aprendizado nunca tem fim." />

      <section>
        <ConhecimentoItem year={2013} title="Graduação" description="Bacharel em Sistema da Informação pela faculdade Eniac" />
        <ConhecimentoItem year={2021} title="Curso" description="Curso básico de Front-End pela Alura" />
        <ConhecimentoItem year={2021} title="Curso" description="Curso Ignite Trilha de React JS mestrado pela Rocketseat" />
        <ConhecimentoItem year={2022} title="Curso" description="Curso Ignite Trilha de Node JS mestrado pela Rocketseat" />
      </section>
    </Container>
  );
};

export default Conhecimento;
