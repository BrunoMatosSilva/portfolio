import { ReactNode } from 'react';
import { TecnologiaContainer } from './styles';

interface TecnologiaProps {
  title: string;
  icon: ReactNode;
}

export default function TecnologiaItem({ title, icon }: TecnologiaProps) {
  return (
    <TecnologiaContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </TecnologiaContainer>
  );
}
