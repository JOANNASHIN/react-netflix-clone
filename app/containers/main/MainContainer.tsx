import VideoItem from '@/components/videoItem/VideoItem';
import style from '@/containers/main/Main.style';

const MainContainer = () => {
  return (
    <div css={style}>
      <h1>main</h1>
      <VideoItem />
    </div>
  );
};

export default MainContainer;
