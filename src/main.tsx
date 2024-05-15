import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Header/Header';
import { Aside } from './Aside/Aside';
import { Section } from './Section/Section';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='cv'>
      <Header />
      <Aside />
      <Section />
    </main>
  </React.StrictMode>,
);
