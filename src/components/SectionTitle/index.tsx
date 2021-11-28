import { ReactNode } from 'react';
import { Container } from './styles';

interface SectionTitleProps {
  title: string;
  description?: string | ReactNode;
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <Container>
      <h1>${'\u007B'}{title}{'\u007D'}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
};

export default SectionTitle;
