import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

import { Container as Wrapper } from '../../components/Wrapper/styles';

import Color from '../../styles/color';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${Color.text.primary};
  background: ${Color.primary.default};
`;

export const Content = styled(Wrapper)`
  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: 
      'logo hero hero'
      'buttons buttons total';
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
  }
`;

export const Logo = styled.img`
  height: 10rem;

  @media (min-width: 1100px) {
    height: 100%;
  }
`;

export const Hero = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  & a:first-child {
    margin-right: 1.6rem;
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
  }
`;

interface ButtonProps extends LinkProps {
  type: 'study' | 'giveClasses';
}

export const Button = styled(Link)<ButtonProps>`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2.0rem Archivo;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: ${Color.button.text};

  transition: background-color 0.2s;

  background: ${props => props.type === 'study' ? Color.primary.lighter : Color.secundary.default};
  
  &:hover {
    background: ${props => props.type === 'study' ? Color.primary.light : Color.secundary.dark};
  }

  @media (min-width: 1100px) {
    font-size: 2.4rem;
  }
`;

export const Icon = styled.img`
  width: 4rem;

  @media (min-width: 1100px) {
    margin-right: 3.4rem;
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`;