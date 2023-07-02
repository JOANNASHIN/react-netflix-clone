'use client';
import ScrollSpy from '../components/scrollSpy/ScrollSpy';
import styles from './style';

const Center = ({ children, backgroundColor = 'rgb(255,255,255)', id, height = '100vh' }) => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    backgroundColor: backgroundColor,
  };

  return (
    <div id={id} style={styles}>
      {children}
    </div>
  );
};

const Navigation = props => {
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(e.currentTarget.href.split('#')[1]);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        backgroundColor: 'beige',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <a onClick={e => onPress(e)} href="#orange">
          <div data-to-scrollspy-id="orange" className={'ss-item'}>
            orange
          </div>
        </a>
        <a onClick={e => onPress(e)} href="#brown">
          <div data-to-scrollspy-id="brown" className={'ss-item'}>
            brown
          </div>
        </a>
        <a onClick={e => onPress(e)} href="#blue">
          <div data-to-scrollspy-id="blue" className={'ss-item'}>
            blue
          </div>
        </a>
        <a onClick={e => onPress(e)} href="#green">
          <div data-to-scrollspy-id="green" className={'ss-item'}>
            green
          </div>
        </a>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div css={styles}>
      <Navigation />
      <ScrollSpy>
        <Center id="orange" backgroundColor={'orange'}>
          <h1>Orange</h1>
        </Center>
        <Center id="brown" backgroundColor={'brown'}>
          <h1>Brown</h1>
        </Center>
        <Center id="blue" backgroundColor={'blue'}>
          <h1>Blue</h1>
        </Center>
        <Center id="green" backgroundColor={'green'}>
          <h1>Green</h1>
        </Center>
      </ScrollSpy>
    </div>
  );
}
