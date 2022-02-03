import { ProjetosContainer } from '../../styles/ProjetosStyles';
import Header from '../../components/Header';
import ProjetosFeitos from '../../components/ProjetosFeitos';

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <ProjetosFeitos
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://powerbiexperience.com/wp-content/uploads/2020/09/dashboard-simulador-financeiro-fluxo-de-caixa.jpg"
        />

        <ProjetosFeitos
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://powerbiexperience.com/wp-content/uploads/2020/09/dashboard-simulador-financeiro-fluxo-de-caixa.jpg"
        />

        <ProjetosFeitos
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://powerbiexperience.com/wp-content/uploads/2020/09/dashboard-simulador-financeiro-fluxo-de-caixa.jpg"
        />

        <ProjetosFeitos
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://powerbiexperience.com/wp-content/uploads/2020/09/dashboard-simulador-financeiro-fluxo-de-caixa.jpg"
        />
      </main>
    </ProjetosContainer>
  );
}
