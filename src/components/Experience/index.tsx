

import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experience() {
  return (
    <Container>
      <SectionTitle title="16 anos" description="de experiências em técnologia" />

      <section>
        <ExperienceItem year={2020} title="Freelancer" description="Desenvolvendo meu primeiro website para um cliente" />
        <ExperienceItem year={2020} title="Freelancer" description="Desenvolvendo meu primeiro website para um cliente" />
        <ExperienceItem year={2020} title="Freelancer" description="Desenvolvendo meu primeiro website para um cliente" />
        <ExperienceItem year={2020} title="Freelancer" description="Desenvolvendo meu primeiro website para um cliente" />
      </section>
    </Container>
  );
};

export default Experience;
