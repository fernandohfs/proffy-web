import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import { 
  Container,
  LogoContainer,
  Content,
  Logo,
  Hero,
  ButtonsContainer,
  Button,
  Icon,
  TotalConnections,
} from './styles';

const Landing: React.FC = () => (
  <Container>
    <Content>
      <LogoContainer>
        <Logo src={logoImg} alt="Proffy" />
        <h2>Sua plataforma de estudos online.</h2>
      </LogoContainer>

      <Hero src={landingImg} alt="Plataforma de estudos" />

      <ButtonsContainer>
        <Button href="" type="study">
          <Icon src={studyIcon} alt="Estudar" />
          Estudar
        </Button>

        <Button href="" type="giveClasses">
          <Icon src={giveClassesIcon} alt="Dar aulas" />
          Dar aulas
        </Button>
      </ButtonsContainer>

      <TotalConnections>
        Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
      </TotalConnections>
    </Content>
  </Container>
);

export default Landing;