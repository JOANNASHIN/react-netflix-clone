import React from 'react';
import videoItemStyles from './style';

function VideoItem() {
  const testImage =
    'https://occ-0-2218-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfGwCHkfVt0VvppMbdJP500EImDcpdIH1huv3tO9oVlh4JtEIMPjM1E5XkNGruJjWnW_WOKRLD6DkDBYCX_-rjWsu3f-nvWYOsJltHrxYhwuypa2qeE681p1ZXo4L3wXcPAurq7ZFmgi9E5OrHBPoVGqSAdOihVvfOh0YLvrpPDHTWG5jnDx2rXzGIenI63UERcCfjbzheHpoO4sNfLC-eP4V5DQCVcI2nhhbAlf9WU_86ujSdhL1g_Z04kpRcFpPYFYC8ZjAnJ9iFuT5yM29lQyMwzQsfYRpXSQqVV-4yfnkqFWzaC5fXl-qVYEdPM1L15jHhMFjfuoiWPdNIMWG8D-UUnbrcXk17eIL2Wy1tUKIEOQ2te70g.jpg?r=808';
  return (
    <div css={videoItemStyles}>
      <div className="video-item">
        <figure className="video-item__img">
          <img src={testImage} alt="" />
        </figure>

        <div className="preview-layer">
          <div className="layer__img">
            <span className="layer__badge--top">
              TOP
              <br />
              <em>10</em>
            </span>
            <figure>
              <img src={testImage} />
            </figure>
          </div>

          <div className="layer__detail">
            <nav className="layer__quick">
              <button>play</button>
              <button>plus</button>
              <button>like</button>
            </nav>

            <p>
              <span>15</span>
              <span>에피소드 8개</span>
              <span>HD</span>
            </p>

            <p className="layer__detail__type">어두운 • 긴장감 넘치는 • 스릴러</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
