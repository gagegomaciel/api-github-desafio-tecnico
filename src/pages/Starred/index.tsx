import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/github-logo.png';

import { Header, UserInfo, Starreds, Logo } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Starred {
  name: string;
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  }
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

const Starred: React.FC = () => {
  const [starreds, setStarreds] = useState<Starred[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`users/${params.repository}/starred`).then((response) => {
      setStarreds(response.data);
    });

    api.get(`users/${params.repository}`).then((response) => {
      setUser(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <Logo src={logoImg} alt="Github" />
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

      <Starreds>
        { starreds.map((starred) => (
          <a key={starred.owner.login} href={`https://github.com/${starred.full_name}`} target="_blank" rel="noopener noreferrer">
            <img
              src={starred.owner.avatar_url}
              alt={starred.owner.login}
            />
            <div>
              <strong>{starred.name}</strong>
              <p>{starred.owner.login}</p>
              <p>{starred.full_name}</p>
              
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Starreds>
    </>
  );
};

export default Starred;
