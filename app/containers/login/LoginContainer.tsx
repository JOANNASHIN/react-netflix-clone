import style from './Login.style';

const LoginContainer = () => {
  return (
    <div css={style}>
      <form>
        <legend>로그인</legend>
        <fieldset>
          <label>
            <input type="text" placeholder="이메일 주소 또는 전화번호" />
          </label>
          <label>
            <input type="password" placeholder="비밀번호" />
          </label>

          <button type="submit">로그인</button>
          <div>
            <label>
              <input type="checkbox" />
              <span>로그인 정보 저장</span>
            </label>

            <a href="#">도움이 필요하신가요?</a>
          </div>

          <div>
            <p>
              Netflix 회원이 아닌가요? <a href="#">지금 가입하세요.</a>
            </p>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginContainer;
