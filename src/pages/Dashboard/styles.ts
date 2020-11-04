import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 30px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 800px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 10px 0 0 10px;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 10px 10px 0;
    border: 0;
    font-weight: bold;
    color: #fff;
    font-size: 22px;
    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.1, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 15px;
  padding: 0 15px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 800px;

  a {
    background: #fff;
    width: 100%;
    padding: 20px;
    display: block;
    text-decoration: none;
    border-radius: 10px;

    display: flex;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d; 
      }

      p {
        font-size: 14px;
        color: #a8a8b3;
        margin-top: 4px;
      }

      span {
        font-size: 14px;
        color: #a8a8b3;
        margin-top: 5px;
      }

      ul {
        display: flex;
        list-style: none;
        margin-top: 10px;

        li {
          & + li {
            margin-left: 20px;
          }

          strong {
            display: block;
            font-size: 14px;
            color: #999999;
          }

          span {
            display: block;
            margin-top: 4px;
            color: #454545;
            font-size: 14px;
          }
        }
      }

      div {
        flex: 1;
        display: flex;
        margin: 15px 0;
        align-items: center;
        
        a {
          width: 90px;
          height: 35px;
          margin: 0 5px;
          border-radius: 6px;
          border: none;
          background-color: #3498DB;
          justify-content: center;
          padding: 15px;

          &:hover {
            transform: translateY(1px);
            background: ${shade(0.1, '#3498DB')};
          }

          p {
            font-size: 14px;
            color: #FFF;
          }
        }
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
