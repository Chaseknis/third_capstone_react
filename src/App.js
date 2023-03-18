import { Route, Routes } from 'react-router-dom';
import Home from './routers/home';
import './App.css';
import Details from './routers/details';
import Nav from './routers/nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
