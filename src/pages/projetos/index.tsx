import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { ProjetosContainer } from '../../styles/ProjetosStyles';
import Header from '../../components/Header';
import ProjetosFeitos from '../../components/ProjetosFeitos';
import { IProjeto } from '../../types/IProjeto';
import { getPrismicClient } from '../../services/prismic';

interface ProjetoProps {
  projetos: IProjeto[];
}

export default function Projetos({ projetos }: ProjetoProps) {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        {projetos.map(projeto => (
          <ProjetosFeitos
            key={projeto.slug}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            img={projeto.thumbnail}
          />
        ))}
      </main>
    </ProjetosContainer>
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
