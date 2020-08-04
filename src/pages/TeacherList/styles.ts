import styled from 'styled-components';

import { Container as Wrapper } from '../../components/Wrapper/styles';

import Color from '../../styles/color';

export const Container = styled(Wrapper)`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const FormGroup = styled.div`
  position: relative;

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${Color.primary.light};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  & + & {
    margin-top: 1.4rem;
  }

  @media (min-width: 700px) {
    & + & {
      margin-top: 0;
    }
  }
`;

export const Label = styled.label`
  color: ${Color.text.primary};
  font-size: 1.4rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: ${Color.input.background};
  border: 1px solid ${Color.line.white};
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
`;

export const TeacherListContainer = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;