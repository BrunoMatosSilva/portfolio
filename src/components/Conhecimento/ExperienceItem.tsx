import { ItemContainer } from './styles';

interface ConhecimentoItemProps {
  year: number;
  title: string;
  description: string;
}

function ConhecimentoItem({ year, title, description }: ConhecimentoItemProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}

export default ConhecimentoItem;
