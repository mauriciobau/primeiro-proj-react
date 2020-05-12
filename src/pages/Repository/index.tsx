import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}


const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

return (
  <>
  <Header>
    <img src={logoImg} alt="Github Explorer" />
    <Link to="/">
      <FiChevronLeft size={16} />
      Voltar
    </Link>
  </Header>

  <RepositoryInfo>
  <header>
    <img src=""></img>
    <div>
      <strong>rocketseat/unform</strong>
      <p>descrição</p>
    </div>
  </header>
  <ul>
    <li>
      <strong>1582</strong>
      <span>Stars</span>
    </li>
    <li>
      <strong>46</strong>
      <span>Forks</span>
    </li>
    <li>
      <strong>87</strong>
      <span>Issues abertas</span>
    </li>
  </ul>
  </RepositoryInfo>

  <Issues>
    <Link key={`dfasdf`} to={`asdfasdf`}>
      <div>
        <strong>asdfasdf</strong>
        <p>asdfasdf</p>
      </div>
      <FiChevronRight size={20} />
    </Link>
  </Issues>
  </>
);
}

export default Repository;
