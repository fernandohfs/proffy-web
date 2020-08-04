import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Color from '../../styles/color';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Color.primary.default};

  @media (min-width: 700px) {
    height: 340px;
  }
`;

export const TopBar = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${Color.text.primary};
  padding: 1.6rem 0;

  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;

export const BackLink = styled(Link)`
  height: 3.2rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;

export const BackIcon = styled.img``;

export const Logo = styled.img`
  height: 1.6rem;
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 3.2rem auto;
  position: relative;

  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: ${Color.title.primary};
  }

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    strong {
      max-width: 350px;
    }
  }
`;
