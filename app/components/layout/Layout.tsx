import Header from '@/components/header/Header';
import style from './Layout.style';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div css={style}>
      <Header />
      {children}
    </div>
  );
}
