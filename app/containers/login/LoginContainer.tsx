import Link from 'next/link';
import style from './Login.style';

const LoginContainer = () => {
  return (
    <div css={style} className="login">
      <form className="login__form">
        <legend>로그인</legend>
        <fieldset>
          <label className="login__form__input">
            <input type="text" placeholder="이메일 주소 또는 전화번호" />
          </label>
          <label className="login__form__input">
            <input type="password" placeholder="비밀번호" />
          </label>

          <button type="submit" className="login__form__submit">
            로그인
          </button>

          <div className="login__footer">
            <div className="login__footer__division">
              <label className="login__footer__save-id">
                <input type="checkbox" />
                <span>로그인 정보 저장</span>
              </label>

              <a href="https://www.netflix.com/kr/LoginHelp" className="login__footer__help">
                도움이 필요하신가요?
              </a>
            </div>
            <div className="login__footer__division">
              <p className="login__footer__text">
                Netflix 회원이 아닌가요?&nbsp;
                <Link href="/join" className="login__footer__join">
                  지금 가입하세요.
                </Link>
              </p>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginContainer;
