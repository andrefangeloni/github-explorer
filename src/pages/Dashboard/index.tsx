import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="GitHub Explorer" />
    <Title>Explore repositórios no GitHub</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">
        Pesquisar
      </button>
    </Form>

    <Repositories>
      <a href="https://github.com/">
        <img src="https://github.com/andrefangeloni.png" alt="Avatar" />

        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy high scalable forms</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="https://github.com/">
        <img src="https://github.com/andrefangeloni.png" alt="Avatar" />

        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy high scalable forms</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="https://github.com/">
        <img src="https://github.com/andrefangeloni.png" alt="Avatar" />

        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy high scalable forms</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
