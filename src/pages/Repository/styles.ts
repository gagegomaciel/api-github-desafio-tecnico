import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

export const UserInfo = styled.section`
  margin-top: 40px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 28px;
        color: #999999;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #454545;
      }
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 40px;

  a {
    background: #fff;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    border-radius: 10px;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

    ul {
      display: flex;
      list-style: none;
      margin-top: 10px;

      li {
        & + li {
          margin-left: 80px;
        }

        strong {
          display: block;
          font-size: 16px;
          color: #2E86C1;
        }

        span {
          display: block;
          margin-top: 4px;
          color: #454545;
          font-size: 16px;
        }
      }
    }
  }
`;
