import { css } from '@emotion/react';

const DetailStyle = css`
  width: 100%;
  height: 100vh;

  .container {
    overflow: auto;
    position: relative;
    display: grid;
    grid-template: 'main aside' 1fr/9fr minmax(320px, 1fr);
    grid-gap: 0 var(--tds-size--6x);
    -webkit-padding-end: var(--tds-size--6x);
    padding-inline-end: var(--tds-size--6x);
    scroll-margin-top: var(--tds-shell-header-height);
    transition: none;
    height: 100%;

    &-visual {
      grid-area: main;
      max-height: 100%;
      position: sticky;
      overflow: hidden;
      height: 100vh;
      top: 0;

      &-box {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        visibility: hidden;
        transform: translateX(calc(var(--off-pos-slide) * -1));
        transition: opacity 0.5s var(--bezier), visibility 0.5s 0.5s, transform 0.5s var(--bezier);

        &:nth-child {
          &(1) {
            background: yellow;
          }
          &(2) {
            background: green;
          }
          &(3) {
            background: skyblue;
          }
          &(4) {
            background: red;
          }
        }
        &.active {
          opacity: 1;
          visibility: inherit;
          transform: translateX(0);
          transition: opacity 0.5s var(--bezier), visibility 0.5s 0s, transform 0.5s var(--bezier);
        }
      }
    }

    &-info {
      grid-area: aside;
      -webkit-overflow-scrolling: touch;
      overflow: visible !important;
      animation: animate-in 1s var(--bezier) !important;

      li {
        height: 400px;
        border: 1px solid red;
      }
    }
  }
`;

export default DetailStyle;
