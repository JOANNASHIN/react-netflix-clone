import Link from 'next/link';
import { css } from '@emotion/react';

interface IHeaderProps {}

const color = 'white';

const Header = (props: IHeaderProps) => {
  return (
    <header>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <h1>
        <Link href="/">
          <figure>
            <img src="/images/logo.png" alt="Nexflix" />
          </figure>
        </Link>
      </h1>

      <ul>
        <li>
          <Link href="/">홈</Link>
        </li>
        <li>
          <Link href="/">시리즈</Link>
        </li>
        <li>
          <Link href="/">영화</Link>
        </li>
        <li>
          <Link href="/">NEW! 요즘 대세 콘텐츠</Link>
        </li>
        <li>
          <Link href="/">내가 찜한 콘텐츠</Link>
        </li>
        <li>
          <Link href="/">언어별로 찾아보기</Link>
        </li>
      </ul>

      {/* 퀵메뉴 */}
      <nav>
        <button>검색</button>
        <button>알림</button>
        <button>프로필</button>
      </nav>
    </header>
  );
};

export default Header;
