import { css } from '@emotion/react';
import { HeaderHeight } from '@/components/header/Header.style';

const style = css`
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  padding-top: ${HeaderHeight};

  main {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &.bgImage {
    background: url('/images/background.jpg') no-repeat 0 0 / 100% auto;

    header,
    main {
      z-index: 1;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0, transparent);
    }
  }
`;

export default style;
