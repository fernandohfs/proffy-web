import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { 
  Container,
  TopBar,
  BackLink,
  BackIcon,
  Logo,
  HeaderContent,
} from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => (
  <Container>
    <TopBar>
      <BackLink to="/">
        <BackIcon src={backIcon} alt="Voltar" />
      </BackLink>
      <Logo src={logoImg} alt="Proffy" />
    </TopBar>

    <HeaderContent>
      <strong>{title}</strong>
      
      {children}
    </HeaderContent>
  </Container>
);

export default PageHeader;