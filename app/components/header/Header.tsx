'use client';

import Link from 'next/link';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface IHeaderProps {}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .left {
    display: flex;
    align-items: center;
  }

  .logo {
    padding: 1rem;

    img {
      width: 10rem;
    }
  }

  .menu {
    display: flex;
    margin-left: 1rem;

    &__box {
      padding: 0.5rem;

      a {
        color: #fff;
        font-size: 1rem;
        text-decoration: none;
      }
    }
  }
`;

const Header = (props: IHeaderProps) => {
  return (
    <HeaderWrapper>
      <div className="left">
        <h1 className="logo">
          <Link href="/">
            <img src="/images/logo.png" alt="Nexflix" />
          </Link>
        </h1>

        <ul className="menu">
          <li className="menu__box">
            <Link href="/">홈</Link>
          </li>
          <li className="menu__box">
            <Link href="/">시리즈</Link>
          </li>
          <li className="menu__box">
            <Link href="/">영화</Link>
          </li>
          <li className="menu__box">
            <Link href="/">NEW! 요즘 대세 콘텐츠</Link>
          </li>
          <li className="menu__box">
            <Link href="/">내가 찜한 콘텐츠</Link>
          </li>
          <li className="menu__box">
            <Link href="/">언어별로 찾아보기</Link>
          </li>
        </ul>
      </div>

      {/* 퀵메뉴 */}
      <nav>
        <button>검색</button>
        <button>알림</button>
        <button>프로필</button>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
