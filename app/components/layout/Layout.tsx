import Header from '@/components/header/Header';
import style from './Layout.style';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div css={style} className="bgImage">
      <Header />
      <main>{children}</main>
    </div>
  );
}
