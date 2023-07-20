import { css } from '@emotion/react';

export const HeaderHeight = '4rem';

const style = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0, transparent);

  .header {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1280px;
      height: ${HeaderHeight};
      padding: 0 1rem;
      box-sizing: border-box;
    }

    &__left {
      display: flex;
      align-items: center;
    }

    &__logo {
      img {
        width: 7rem;
      }
    }

    &__menu {
      display: flex;
      margin-left: 1rem;
      font-size: 0;

      &__box {
        padding: 0.5rem;

        a {
          color: #fff;
          font-size: 0.5rem;
          text-decoration: none;
          white-space: nowrap;
        }
      }
    }
  }
`;

export default style;
