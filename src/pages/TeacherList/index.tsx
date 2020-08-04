import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { 
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  TeacherListContainer,
} from './styles';

const TeacherList: React.FC = () => (
  <Container>
    <PageHeader title="Estes são os proffys disponíveis.">
      <Form>
        <FormGroup>
          <Label htmlFor="subject">Matéria</Label>
          <Input type="text" id="subject" name="subject" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="week_day">Dia da semana</Label>
          <Input type="text" id="week_day" name="week_day" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="time">Hora</Label>
          <Input type="text" id="time" name="time" />
        </FormGroup>
      </Form>
    </PageHeader>

    <TeacherListContainer>
      <TeacherItem />
    </TeacherListContainer>
  </Container>
);

export default TeacherList;