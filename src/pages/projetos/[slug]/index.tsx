import Prismic from '@prismicio/client';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import BannerProjeto from '../../../components/BannerProjeto';
import ButtonNav from '../../../components/Button';
import Header from '../../../components/Header';
import LoadingScreen from '../../../components/LoadingScreen';
import { getPrismicClient } from '../../../services/prismic';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import { IProjeto } from '../../../types/IProjeto';

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projeto({ projeto }: ProjetoProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjetoContainer>
      <Head>
        <title>BMSFrontEnd | {projeto.title}</title>
        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} />
      </Head>
      <Header />
      <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      />

      <main>
        <p>{projeto.description}</p>
        <h2>Tecnologias Usadas</h2>
        <div dangerouslySetInnerHTML={{ __html: projeto.technologies }} />
        <ButtonNav link={projeto.link} description="Ver Projeto Online" />
      </main>
    </ProjetoContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.predicates.at('document.type', 'projeto')
  ]);

  const paths = projetos.results.map(projeto => ({
    params: {
      slug: projeto.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projeto', String(slug), {});

  const projeto = {
    slug: response.uid,
    title: response.data.title,
    description: response.data.description,
    technologies: RichText.asHtml(response.data.technologies),
    type: response.data.type,
    link: response.data.link.url,
    thumbnail: response.data.thumbnail.url
  };

  console.log(projeto);

  return {
    props: {
      projeto
    },
    revalidate: 86400
  };
};
