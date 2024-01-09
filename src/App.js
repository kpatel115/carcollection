import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Dashboard } from '@mui/icons-material'
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';


const App = () => {

  return (
    <Router>
      <NavBar />
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          {/* {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected ? ( 
                  <AuthChecker>
                    <route.component />
                  </AuthChecker> 
                  ) : (
                  <route.component /> 
                  ) 
                }
              />
          ))
          } */}

        </Routes>
      </Provider>
    </Router>
  );
};

export default App;