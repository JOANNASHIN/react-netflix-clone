'use client';

import Link from 'next/link';
import style from './Header.style';

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <header css={style} className="header">
      <div className="header__wrapper">
        <div className="header__left">
          <h1 className="header__logo">
            <Link href="/">
              <img src="/images/logo.png" alt="Nexflix" />
            </Link>
          </h1>

          <ul className="header__menu">
            <li className="header__menu__box">
              <Link href="/">홈</Link>
            </li>
            <li className="header__menu__box">
              <Link href="/">시리즈</Link>
            </li>
            <li className="header__menu__box">
              <Link href="/">영화</Link>
            </li>
            <li className="header__menu__box">
              <Link href="/">NEW! 요즘 대세 콘텐츠</Link>
            </li>
            <li className="header__menu__box">
              <Link href="/">내가 찜한 콘텐츠</Link>
            </li>
            <li className="header__menu__box">
              <Link href="/">언어별로 찾아보기</Link>
            </li>
          </ul>
        </div>

        {/* 퀵메뉴 */}
        <nav className="header__quick">
          <button className="header__quick__menu">검색</button>
          <button className="header__quick__menu">알림</button>
          <button className="header__quick__menu">프로필</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
