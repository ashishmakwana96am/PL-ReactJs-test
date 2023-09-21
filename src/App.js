import './App.scss';
import Home from './component/home/Home';
import ModalA from './component/modal/ModalA';
import ModalB from './component/modal/ModalB';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function HomePage() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/ModalA" exact element={<ModalA />} />
          <Route path="/ModalB" exact element={<ModalB />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default HomePage;
