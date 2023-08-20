import { css } from '@emotion/react';

const color = {
  black: '#111',
  red: '#ff0000',
  white: '#fff',
};

const styles = css`
  .preview-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: ${color.black};
    border-radius: 0.5rem;
    color: ${color.white};

    .layer {
      &__badge {
        &--top {
          position: absolute;
          top: 0;
          right: 0;
          padding: 0.3rem;
          background: ${color.red};
          color: white;
          font-weight: bold;
          font-size: 0.8rem;
          text-align: center;

          em {
            font-size: 1.5rem;
          }
        }
      }

      &__img {
        overflow: hidden;
        position: relative;
        width: 100%;
        border-radius: 0.5rem;

        img {
          position: absolute;
          top: 0;
          left: 0;
          max-width: 100%;
          object-fit: cover;
        }

        &:after {
          content: '';
          display: block;
          padding-bottom: 50%;
        }
      }

      &__detail {
        padding: 1.5rem 1rem;

        &__type {
          margin-top: 0.4rem;
        }
      }

      &__quick {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export default styles;
