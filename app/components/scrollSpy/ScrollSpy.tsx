import { MutableRefObject, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import ScrollSpyStyles from './style';
import { throttle } from 'lodash-es';

interface ScrollSpyProps {
  children: ReactNode;

  // refs
  navContainerRef?: MutableRefObject<HTMLDivElement | null>;
  parentScrollContainerRef?: MutableRefObject<HTMLDivElement | null>;

  // throttle
  scrollThrottle?: number;

  // callback
  onUpdateCallback?: (id: string) => void;

  // offsets
  offsetTop?: number;
  offsetBottom?: number;

  // customize attributes
  useDataAttribute?: string;
  activeClass?: string;

  useBoxMethod?: boolean;
  updateHistoryStack?: boolean;
}

const ScrollSpy = ({
  children,

  navContainerRef,
  parentScrollContainerRef,

  onUpdateCallback,

  //
  scrollThrottle,
  activeClass,
}: ScrollSpyProps) => {
  /**
   * scroll 컨테이너
   */
  const scrollContainerRef = useRef(null);

  /**
   * scroll event
   */
  const checkActiveScroll = useMemo(() => {
    console.log(111);
  }, []);

  /**
   * page rendering되었을때
   */
  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(() => checkActiveScroll, 300),
    );

    return () => {
      window.addEventListener('scroll', () => checkActiveScroll);
    };
  }, []);

  return <div ref={scrollContainerRef}>{children}</div>;
};

const ScrollSpy2 = ({ children }) => {
  const [position, setPosition] = useState(0);
  const [activeKey, setActiveKey] = useState('');

  const handleScroll = useMemo(() => {
    throttle(() => {
      setPosition(window.scrollY ?? 0);
    }, 200);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll);

    return () => {
      window.addEventListener('scroll', () => handleScroll);
    };
  }, []);

  const updateActive = key => {
    setActiveKey(key);
  };

  return (
    <div css={ScrollSpyStyles}>
      <nav>
        <li>
          <a href="#test1" onClick={() => updateActive('test1')}>
            test1
          </a>
          <a href="#test2" onClick={() => updateActive('test2')}>
            test2
          </a>
          <a href="#test3" onClick={() => updateActive('test3')}>
            test3
          </a>
        </li>
      </nav>

      <div>
        <section className={activeKey === 'test1' ? 'active' : ''}>section 1</section>
        <section className={activeKey === 'test2' ? 'active' : ''}>section 2</section>
        <section className={activeKey === 'test1' ? 'active' : ''}>section 1</section>
      </div>
    </div>
  );
};

// const Left = ({ children }) => {
//   console.log(children.length);
//   console.log(children);
//   return <div className="scroll-left">{children}</div>;
// };

// const LeftItem = ({ children, id }) => {
//   return (
//     <LeftVisualItem id={id}>
//       <section className="scroll-left-item">{children}</section>
//     </LeftVisualItem>
//   );
// };

// const Right = ({ children, tagName = 'div' }) => {
//   return <div className="scroll-right">{children}</div>;
// };

// const RightItem = ({ children, id }) => {
//   return <section className="scroll-right-item">{children}</section>;
// };

export default Object.assign(ScrollSpy, {
  // Left,
  // LeftItem,
  // Right,
  // RightItem,
});
