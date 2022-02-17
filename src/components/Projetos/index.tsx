/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { IProjeto } from '../../types/IProjeto';
import ButtonNav from '../Button';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';

import { Container } from './styles';

interface ProjetosProps {
  projetos: IProjeto[];
}

function Projetos({ projetos }: ProjetosProps) {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
        {projetos.slice(0, 3).map(projeto => (
          <ProjetoItem
            key={projeto.slug}
            img={projeto.thumbnail}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
          />
        ))}
      </section>
      <Link href="/projetos">
        <ButtonNav link="projetos" description="Ver Todos os Projetos" />
      </Link>
    </Container>
  );
}

export default Projetos;
