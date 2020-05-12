import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
  <img src={logoImg} alt="Github Explorer" />
  <Title>Eplore repositórios no Guithub</Title>

  <Form>
    <input placeholder="Digite o nome do repositório" />
    <button type="submit">Pesquisar</button>
  </Form>

  <Repositories>
    <a href="teste">
      <img src="https://avatars1.githubusercontent.com/u/43859916?s=60&u=4546d74d63cf44eac5231583e403dd163901399f&v=4"
      alt="Maurício Baú"/>

      <div>
        <strong>mauriciobau/ndm</strong>
        <p>K4kgjfsdn sadjfaskd jwdkrfj wakgtj</p>
      </div>

      <FiChevronRight size={20} />
    </a>
    <a href="teste">
      <img src="https://avatars1.githubusercontent.com/u/43859916?s=60&u=4546d74d63cf44eac5231583e403dd163901399f&v=4"
      alt="Maurício Baú"/>

      <div>
        <strong>mauriciobau/ndm</strong>
        <p>K4kgjfsdn sadjfaskd jwdkrfj wakgtj</p>
      </div>

      <FiChevronRight size={20} />
    </a>
    <a href="teste">
      <img src="https://avatars1.githubusercontent.com/u/43859916?s=60&u=4546d74d63cf44eac5231583e403dd163901399f&v=4"
      alt="Maurício Baú"/>

      <div>
        <strong>mauriciobau/ndm</strong>
        <p>K4kgjfsdn sadjfaskd jwdkrfj wakgtj</p>
      </div>

      <FiChevronRight size={20} />
    </a>
  </Repositories>
  </>
  );
};

export default Dashboard;
