import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import perfil from '../../assets/Programmer.gif';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={perfil} alt="Dev Foto" />
      <div>
        <TextContainer>
          <h1> Ola! </h1>
          <h2> Me chamo Bruno </h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">
              //Minha apresentação
            </span>
            <span className="purple">
              Infos
            </span> {'\u007B'}
            <div>
              Apaixonado: <span className="blue">Técnologia,</span>
            </div>
            <div>
              Residente: <span className="blue">São Paulo</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem data-aos="zoom-in">
            <span className="purple">
              Cargo
            </span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev Front-End,</span>
            </div>
            <div>
              Empresa: <span className="blue">BMS Dev</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
};

export default HomeHero;
