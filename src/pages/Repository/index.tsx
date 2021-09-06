import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface stateType {
  from: {
    pathname: string;
  };
}

const Repository: React.FC = () => {
  const { state } = useLocation<stateType>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://github.com/andrefangeloni.png" alt="Avatar" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asdasd">
          <div>
            <strong>adasdsa</strong>
            <p>asdasd</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
