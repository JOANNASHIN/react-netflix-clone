import React, { useState } from 'react';
import styles from './VideoItem.style';
import VideoPreview from '../VideoPreview/VideoPreview';

const VideoItem = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleOpenPreview = () => {
    setShowPreview(!showPreview);
  };

  const testImage =
    'https://occ-0-2218-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfGwCHkfVt0VvppMbdJP500EImDcpdIH1huv3tO9oVlh4JtEIMPjM1E5XkNGruJjWnW_WOKRLD6DkDBYCX_-rjWsu3f-nvWYOsJltHrxYhwuypa2qeE681p1ZXo4L3wXcPAurq7ZFmgi9E5OrHBPoVGqSAdOihVvfOh0YLvrpPDHTWG5jnDx2rXzGIenI63UERcCfjbzheHpoO4sNfLC-eP4V5DQCVcI2nhhbAlf9WU_86ujSdhL1g_Z04kpRcFpPYFYC8ZjAnJ9iFuT5yM29lQyMwzQsfYRpXSQqVV-4yfnkqFWzaC5fXl-qVYEdPM1L15jHhMFjfuoiWPdNIMWG8D-UUnbrcXk17eIL2Wy1tUKIEOQ2te70g.jpg?r=808';

  return (
    <div css={styles}>
      <div className="video-item">
        <figure className="video-item__img" onClick={handleOpenPreview}>
          <img src={testImage} alt="" />
        </figure>

        {showPreview && <VideoPreview />}
      </div>
    </div>
  );
};

export default VideoItem;
