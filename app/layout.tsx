'use client';

import styled from '@emotion/styled';
import Header from './components/header/Header';
import './styles/global.scss';
import { usePathname } from 'next/navigation';

const Body = styled.body`
  min-width: 1100px;
  // background: #000;
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <html lang="en">
      <Body>
        {pathname !== '/detail' && <Header />}
        {children}
      </Body>
    </html>
  );
}
