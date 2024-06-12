import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootPage from './componenets/page/Root';
import { modalStore } from './stores/modal';
import { useEffect } from 'react';

function App() {
  const modal = modalStore(state => state);

  useEffect(() => {
    console.log(modal.modalState);
  }, [modal.modalState]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
