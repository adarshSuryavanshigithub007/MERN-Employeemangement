
import './App.css';
import Login from '../src/Authentication/Login'
import Register from '../src/Authentication/Register'
import Navbar from '../src/layout/Navbar'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AllUser from './pages/AllUser';
import Adduser from './pages/Adduser';
import EditUser from './pages/EditUser';
function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<AllUser />} />
          <Route exact path='/addnewuser' element={<Adduser />} />
          <Route exact path='/edituser/:id' element={<EditUser />} />
        </Routes>
      </HashRouter>
    </>

  );
}

export default App;
