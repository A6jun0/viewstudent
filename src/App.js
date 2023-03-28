import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import View from './components/View';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
       <Navbar/> 
      <Routes>
        <Route path='/view' element={<View />}></Route>
        <Route path='/add' element={<Add />}></Route>
      </Routes>
    </div>
  );
}

export default App;
