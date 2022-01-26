import { ReactNode } from 'react';
import { TecnologiaContainer } from './styles';

interface TecnologiaProps {
  title: string;
  icon: ReactNode;
}

export default function TecnologiaItem({ title, icon }: TecnologiaProps) {
  return (
    <TecnologiaContainer>
      <p>{title}</p>
      {icon}
    </TecnologiaContainer>
  );
}
