import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { 
  Container,
  Header,
  HeaderImage,
  HeaderContent,
  Description,
  Footer,
  FooterDescription,
  FooterButton,
} from './styles';

const TeacherItem: React.FC = () => (
  <Container>
    <Header>
      <HeaderImage src="https://avatars2.githubusercontent.com/u/9155700?s=460&u=c74034ad9dde167b263c3e08561a7e0e4e92c84f&v=4" alt="Fernando Soares" />
      <HeaderContent>
        <strong>Fernando Soares</strong>
        <span>Química</span>
      </HeaderContent>
    </Header>

    <Description>
      Entusiasta das melhores tecnologias de química avançada.
      <br /><br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
    </Description>

    <Footer>
      <FooterDescription>
        Preço/hora
        <strong>R$ 80,00</strong>
      </FooterDescription>
      <FooterButton>
        <img src={whatsappIcon} alt="WhatsApp" />
        Entrar em contato
      </FooterButton>
    </Footer>
  </Container>
);

export default TeacherItem;