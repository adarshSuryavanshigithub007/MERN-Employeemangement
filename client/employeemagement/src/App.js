
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar';
import ListUser from './pages/ListUser';
import AddNewUser from './pages/AddNewUser';
import ImportData from './pages/ImportData';

function App() {
  return (
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<ListUser/>}/>
          <Route exact path='/addnewuser' element={<AddNewUser/>}/>
          <Route exact path='/importdata' element={<ImportData/>}/>
        </Routes>
      </HashRouter>

  );
}

export default App;
