import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Header/Header';
import { Aside } from './Aside/Aside';
import { Section } from './Section/Section';
import { myCV } from './data';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='cv'>
      <Header />
      <Aside data={myCV.personal} />
      <Section data={myCV.details}/>
    </main>
  </React.StrictMode>,
);
