import { Link } from 'react-router-dom';
import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/delete.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" width="201" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong> 3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span> Nome </span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Samira Ferreira</strong>
              <small>futebol</small>
            </div>
            <span>Samira@mail.com</span>
            <span>(19)92345-6789</span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}
