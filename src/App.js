
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import { LandingPages } from './Pages/LandingPage/LandingPage';
import { RandomPage } from './Pages/RandomPage/RandomPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPages/>}></Route>
      <Route path='/Random' element={<RandomPage/>}></Route>
    </Routes>
  );
}

export default App;
