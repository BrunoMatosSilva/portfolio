

import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ExperienceItem';
import { Container } from './styles';

function Conhecimento() {
  return (
    <Container>
      <SectionTitle title="Conhecimento" description="o aprendizado nunca tem fim." />

      <section>
        <ConhecimentoItem year={2020} title="Freelancer" description="Desenvolvendo meu primeiro website para um cliente" />
        <ConhecimentoItem year={2020} title="Freelancer" description="Desenvolvendo meu primeiro website para um cliente" />
        <ConhecimentoItem year={2020} title="Freelancer" description="Desenvolvendo meu primeiro website para um cliente" />
        <ConhecimentoItem year={2020} title="Freelancer" description="Desenvolvendo meu primeiro website para um cliente" />
      </section>
    </Container>
  );
};

export default Conhecimento;
