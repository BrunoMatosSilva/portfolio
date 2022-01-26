import Conhecimento from '../components/Conhecimento';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Projetos from '../components/Projetos';
import Tecnologias from '../components/Tecnologias';
import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Conhecimento />
        <Projetos />
        <Tecnologias />
      </main>
    </HomeContainer>
  );
}
