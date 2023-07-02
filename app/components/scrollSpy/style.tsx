import { css } from '@emotion/react';

const ScrollSpyStyles = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  overflow: auto;

  .scroll {
    &-left {
      width: 100%;
      box-sizing: border-box;
      border: 1px solid red;

      &-item {
        width: 100%;
        height: 100%;
      }
    }

    &-right {
    }
  }
`;

export default ScrollSpyStyles;
