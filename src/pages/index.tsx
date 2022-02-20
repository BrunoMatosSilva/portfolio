import Head from 'next/head';
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
      <Head>
        <title>BMSFrontEnd | Home</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end foca na utilização do ReactJS e aqui apresento alguns projetos desenvolvidos por mim durante essa minha jornada de aprendizado continuo!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end foca na utilização do ReactJS e aqui apresento alguns projetos desenvolvidos por mim durante essa minha jornada de aprendizado continuo!"
        />
      </Head>

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
    revalidate: 18000
  };
};
