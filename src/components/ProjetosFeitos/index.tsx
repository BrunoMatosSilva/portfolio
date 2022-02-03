import Link from 'next/link';
import { Container } from './styles';

interface ProjetoItemProps {
  title: string;
  type: string;
  img: string;
  slug: string;
}

function ProjetosFeitos({ title, type, img, slug }: ProjetoItemProps) {
  return (
    <Container imgUrl={img}>
      <Link href={`/projetos/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default ProjetosFeitos;
