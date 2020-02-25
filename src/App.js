import React from 'react';
import { ApplicationWrapper } from "./styled";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
function App() {
  return (
    <ApplicationWrapper>
      <Header />
      <Main />
      <Footer />
    </ApplicationWrapper>
  );
}

export default App;
