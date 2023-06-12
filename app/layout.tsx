'use client';

import styled from '@emotion/styled';
import Header from './components/header/Header';
import './styles/global.scss';

const Body = styled.body`
  min-width: 1100px;
  background: #000;
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Body>
        <Header />
        {children}
      </Body>
    </html>
  );
}
