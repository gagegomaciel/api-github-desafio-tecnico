import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/github-logo.png';

import { Header, UserInfo, Repositories, Logo } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  id: number;
}

interface User {
  name: string;
  login: string;
  avatar_url: string;
  company: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

const Repository: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`users/${params.repository}/repos`).then((response) => {
      setRepositories(response.data);
    });

    api.get(`users/${params.repository}`).then((response) => {
      setUser(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <Logo src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>

      { user && (
          <UserInfo>
            <header>
              <img
                src={user.avatar_url}
                alt={user.login}
              />
              <div>
                <strong>{user.name}</strong>
                <p>{user.login}</p>
              </div>
            </header>
            <ul>
              <li>
                <strong>{user.public_repos}</strong>
                <span>Repositórios</span>
              </li>
              <li>
                <strong>{user.followers}</strong>
                <span>Seguidores</span>
              </li>
              <li>
                <strong>{user.following}</strong>
                <span>Seguindo</span>
              </li>
            </ul>
          </UserInfo>
        )
      }

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.id} href={`https://github.com/${repository.full_name}`} target="_blank" rel="noopener noreferrer">
            <div>
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>
              <ul>
                <li>
                  <strong>{repository.open_issues_count}</strong>
                  <span>Issues</span>
                </li>
                <li>
                  <strong>{repository.stargazers_count}</strong>
                  <span>Star</span>
                </li>
                <li>
                  <strong>{repository.forks_count}</strong>
                  <span>Fork</span>
                </li>
              </ul>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Repository;
