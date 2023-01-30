import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditUser from './EditUser';
import NewUser from './NewUser';
import Users from './Users';
import Navbar from './component/Navbar/Navbar';
// import Logout from './Login';
import { AuthContextProvider } from './component/Context/authContext';

function App() {
  return (
    <div className="App">
      {/* <h1>CRUD MERN PIXZELLE</h1> */}

      <Navbar />



      {/* <Search/> */}
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path='/login' element={<Logout />} exact></Route> */}
            <Route path='/' element={<Users />} exact></Route>
            <Route path='/newuser' element={<NewUser />} exact></Route>
            <Route path='/editUser/:iduser' element={<EditUser />} exact></Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>

    </div>
  );
}

export default App;
