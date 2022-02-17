import Prismic from '@prismicio/client';
import Aos from 'aos';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import Conhecimento from '../components/Conhecimento';
import Footer from '../components/Footer';
import FormContato from '../components/FormContato';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Projetos from '../components/Projetos';
import Tecnologias from '../components/Tecnologias';
import { getPrismicClient } from '../services/prismic';
import { HomeContainer } from '../styles/HomeStyles';
import { IProjeto } from '../types/IProjeto';
import 'aos/dist/aos.css';

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  useEffect(() => {
    Aos.init({ durations: 1500 });
  }, []);
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Conhecimento />
        <Projetos projetos={projetos} />
        <Tecnologias />
        <FormContato />
      </main>

      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
