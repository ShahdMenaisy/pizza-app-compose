import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './UI/Navbar/Navbar';
import Home from './Pages/Home';
import Frontend from './Pages/Technology/Frontend/Frontend';
import Backend from './Pages/Technology/Backend/Backend';
import Database from './Pages/Technology/Database/Database';
import AllSubjects from './Pages/Technology/AllSubjects';

import technologyRoutes from './Data/Technology';
// import './App.css'
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  const { frontendRoutes, backendRoutes, databaseRoutes } = technologyRoutes;

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path='/frontend' element={<Frontend />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          {frontendRoutes.map((technology) => (
            <Route key={technology.name} path={`/frontend/${technology.path}`} element={<technology.page />} />
          ))}
          <Route path='/backend' element={<Backend />} />
          {backendRoutes.map((technology) => (
            <Route key={technology.name} path={`/backend/${technology.path}`} element={<technology.page />} />
          ))}
          <Route path='/database' element={<Database />} />
          {databaseRoutes.map((technology) => (
            <Route key={technology.name} path={`/database/${technology.path}`} element={<technology.page />} />
          ))}
          <Route path='/all-subjects' element={<AllSubjects />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
