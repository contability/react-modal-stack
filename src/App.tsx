import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootPage from './componenets/page/Root';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
