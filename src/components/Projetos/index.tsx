/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import ButtonNav from '../Button';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';

import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
        <ProjetoItem
          img="https://powerbiexperience.com/wp-content/uploads/2020/09/dashboard-simulador-financeiro-fluxo-de-caixa.jpg"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjetoItem
          img="https://powerbiexperience.com/wp-content/uploads/2020/09/dashboard-simulador-financeiro-fluxo-de-caixa.jpg"
          title="Projeto 02"
          type="Website"
          slug="teste"
        />
        <ProjetoItem
          img="https://powerbiexperience.com/wp-content/uploads/2020/09/dashboard-simulador-financeiro-fluxo-de-caixa.jpg"
          title="Projeto 03"
          type="Website"
          slug="teste"
        />
      </section>
      <Link href="/projetos">
        <ButtonNav link="projetos" description="Ver Todos os Projetos" />
      </Link>
    </Container>
  );
}

export default Projetos;
