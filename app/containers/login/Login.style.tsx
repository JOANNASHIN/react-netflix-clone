import { color } from '@/styles/variants';
import { css } from '@emotion/react';

const style = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .login {
    &__form {
      padding: 60px 68px 150px;
      background: ${color.black};
      border-radius: 4px;
      box-sizing: border-box;
      color: ${color.white};

      legend {
        margin-bottom: 28px;
        color: #fff;
        font-size: 32px;
        font-weight: 500;
      }

      &__input {
        display: block;
        margin-bottom: 16px;

        input {
          width: 100%;
          height: 50px;
          padding: 0 20px 0;
          background: ${color.bgGrey};
          border: 0;
          border-radius: 4px;
          color: #fff;
          line-height: 50px;
          box-sizing: border-box;
        }
      }

      &__submit {
        width: 100%;
        padding: 10px 0;
        background: ${color.red};
        border-radius: 4px;
        border: 0;
        color: ${color.white};
        font-size: 16px;
        font-weight: 500;
      }
    }

    &__footer {
      &__division {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
      }

      &__save-id {
        input {
          display: none;

          &:checked + span {
            &:before {
              background: ${color.bgGrey};
            }
          }
        }

        span {
          display: flex;
          align-items: center;
          color: ${color.textGrey};
          font-size: 13px;

          &:before {
            content: '';
            display: inline-block;
            width: 16px;
            height: 16px;
            margin-right: 10px;
            background: ${color.white};
            border: 0;
            border-radius: 2px;
          }
        }
      }

      &__help {
        color: ${color.textGrey};
        font-size: 13px;
        text-decoration: none;
      }

      &__text {
        color: ${color.textGrey};
        font-size: 16px;
        font-weight: 400;
      }

      &__join {
        color: ${color.white};
        text-decoration: none;
      }
    }
  }
`;

export default style;
