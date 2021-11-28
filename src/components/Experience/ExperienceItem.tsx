import { ItemContainer } from "./styles";

interface ExperienceItemProps {
  year: number,
  title: string,
  description: string
}

function ExperienceItem({ year, title, description }: ExperienceItemProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
};

export default ExperienceItem;
