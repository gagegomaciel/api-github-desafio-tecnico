import React, { useEffect, useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/github-logo.png';

import { Title, Form, Repositories, Error, Logo } from './styles';

interface User {
  name: string;
  login: string;
  avatar_url: string;
  company: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  id: number;
}

const Dashboard: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [users, setUsers] = useState<User[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@GithubExplorer:users',
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:users',
      JSON.stringify(users),
    );
  }, [users]);

  async function handleAddRUser(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newUser) {
      setInputError('Digite o usuário/login!');
      return;
    }
    try {
      const response = await api.get<User>(`users/${newUser}`);
      
      console.log(response.data);
      const user = response.data;

      setUsers([user, ...users]);
      setNewUser('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse usuário!');
    }
  }

  return (
    <>
      <Logo src={logoImg} alt="Github Explorer" />
      <Title>Listar repositórios do Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRUser}>
        <input
          placeholder="Digite o usuário"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {users.map((user) => (
          <Link 
            key={user.login}
            to={`/repositories/${user.login}`} 
          >
            <img
              src={user.avatar_url}
              alt={user.login}
            />
            <div>
              <strong>{user.name}</strong>
              <p>{user.login}</p>
              <p>{user.bio}</p>
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
              <div>
                <Link 
                  to={`/starred/${user.login}`}
                >
                  <p>Starred</p>
                </Link>
                <Link
                  to={`/repositories/${user.login}`}
                >
                  <p>Repos</p>
                </Link>
              </div>
            </div>
           <FiChevronRight size={30} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
