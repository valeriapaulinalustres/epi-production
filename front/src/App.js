import  { useState, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// components
import Home from './pages/home/Home';
import HeaderMenu from './header/HeaderMenu';
import Navbar from './header/Navbar';
import Header from './header/Header';
import Dengue from './pages/dengue/Dengue';
import Hiv from './pages/hiv/Hiv';
import Footer from './footer/Footer';
import Upload from './pages/upload/Upload';
import Covid from './pages/covid/Covid';
import Sifilis from './pages/sifilis/Sifilis';
import Tbc from './pages/tbc/Tbc';
import LoginUser from './pages/login/LoginUser';
import DataContext, { DataProvider } from './context/DataContext';
import Profile from './pages/profile/Profile';
import AddUser from './pages/profile/AddUser';
import { UsersProvider } from './context/UsersContext';
import ChangePassword from './pages/profile/ChangePassword';

const App = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
      {login ? (
        <DataProvider>
          <UsersProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<LoginUser setLogin={setLogin} />} />
              </Routes>
            </BrowserRouter>
          </UsersProvider>
        </DataProvider>
      ) : (
        <DataProvider>
          <UsersProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dengue' element={<Dengue />} />
                <Route path='/hiv' element={<Hiv />} />
                <Route path='/sifilis' element={<Sifilis />} />
                <Route path='/tbc' element={<Tbc />} />
                <Route path='/upload' element={<Upload />} />
                <Route path='/covid' element={<Covid />} />
                <Route
                  path='/profile'
                  element={<Profile setLogin={setLogin} />}
                />
                <Route path='/profile/add-user' element={<AddUser />} />
                <Route
                  path='/profile/change-password'
                  element={<ChangePassword />}
                />
              </Routes>
              <Footer />
            </BrowserRouter>
          </UsersProvider>
        </DataProvider>
      )}
    </>
  );
};

export default App;


  /*  <DataProvider>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/login" element={<LoginUser />} />
        <Route path="/" element={<Home />} />
        <Route path="/dengue" element={<Dengue />} />
        <Route path="/hiv" element={<Hiv />} />
        <Route path="/sifilis" element={<Sifilis />} />
        <Route path="/tbc" element={<Tbc />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/covid" element={<Covid />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </DataProvider> */



