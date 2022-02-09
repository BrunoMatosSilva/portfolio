import BannerProjeto from '../../../components/BannerProjeto';
import ButtonNav from '../../../components/Button';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';

export default function Projeto() {
  return (
    <ProjetoContainer>
      <Header />
      <BannerProjeto
        title="Projeto 01"
        type="website"
        imgUrl="https://powerbiexperience.com/wp-content/uploads/2020/09/dashboard-simulador-financeiro-fluxo-de-caixa.jpg"
      />

      <main>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cumque, dolor,
          voluptas perferendis earum ratione aut quidem beatae voluptates veritatis exercitationem quo pariatur, vitae nemo.</p>
        <h2>Tecnologias Usadas</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectet;</li>
          <li>Lorem ipsum dolor sit amet, consectet;</li>
          <li>Lorem ipsum dolor sit amet, consectet;</li>
          <li>Lorem ipsum dolor sit amet, consectet;</li>
        </ul>
        <ButtonNav link="#" description="Ver Projeto Online" />
      </main>
    </ProjetoContainer>
  );
}
