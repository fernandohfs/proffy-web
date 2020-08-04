import styled from 'styled-components';

import Color from '../../styles/color';

export const Container = styled.div`
  background: ${Color.box.base};
  border: 1px solid ${Color.line.white};
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;
`;

export const Header = styled.header`
  padding: 3.2rem 2rem;

  display: flex;
  align-items: center;

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`;

export const HeaderImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`;

export const HeaderContent = styled.div`
  margin-left: 2.4rem;

  strong {
    font: 700 2.4rem Archivo;
    display: block;
    color: ${Color.text.title};
  }

  span {
    font-size: 1.6rem;
    display: block;
    margin-top: 0.4rem;
  }
`;

export const Description = styled.p`
  padding: 0 2rem;
  font-size: 1.6rem;
  line-height: 2.8rem;

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`;

export const Footer = styled.footer`
  padding: 3.2rem 2rem;
  background: ${Color.box.footer};
  border-top: 1px solid ${Color.line.white};
  margin-top: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`;

export const FooterDescription = styled.p`
  strong {
    color: ${Color.primary.default};
    font-size: 1.6rem;
    display: block;
  }

  @media (min-width: 700px) {
    strong {
      display: initial;
      margin-left: 1.6rem;
    }
  }
`;

export const FooterButton = styled.button`
  width: 20rem;
  height: 5.6rem;
  background: ${Color.secundary.default};
  color: ${Color.button.text};
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.4rem Archivo;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.2s;

  &:hover {
    background: ${Color.secundary.dark};
  }

  @media (min-width: 700px) {
    width: 24.5rem;
    font-size: 1.6rem;
    justify-content: center;

    & img {
      margin-right: 1.6rem;
    }
  }
`;