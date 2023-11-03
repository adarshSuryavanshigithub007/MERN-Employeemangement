
import './App.css';
import Login from '../src/Authentication/Login'
import Register from '../src/Authentication/Register'
import Navbar from '../src/layout/Navbar'
import {HashRouter,Routes,Route} from 'react-router-dom'
import AllUser from './pages/AllUser';
function App() {
  return (
  <>
   <HashRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/' element={<AllUser/>}/>
          <Route exact path='/register' element={<Register/>}/>
        </Routes>
      </HashRouter>

  </>
     
  );
}

export default App;
