'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { throttle } from 'lodash-es';
import DetailStyle from './style';

export default function Detail() {
  const refScrollContainer = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const current = (refScrollContainer.current as HTMLElement)?.scrollTop ?? 0;
        switch (true) {
          case current > 500 && current <= 1500:
            setActiveIndex(1);
            break;
          case current > 1500 && current <= 2000:
            setActiveIndex(2);
            break;
          case current > 2000:
            setActiveIndex(3);
            break;
          default:
            setActiveIndex(0);
            break;
        }
      }, 300),
    [],
  );

  useEffect(() => {
    const scrollContainer = refScrollContainer.current as HTMLElement;
    if (!scrollContainer) return;

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div css={DetailStyle}>
      <div ref={refScrollContainer} className="container">
        <div className="container-visual">
          <ul>
            {Array.from({ length: 4 }).map((num, index) => (
              <li className={`container-visual-box ${index === activeIndex ? 'active' : ''}`} key={`box${index}`}>
                {index}
              </li>
            ))}
          </ul>
        </div>
        <div className="container-info">
          <ul>
            {Array.from({ length: 10 }).map((num, index) => (
              <li key={`info${index}`}>test</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
