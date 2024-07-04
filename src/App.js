import { useState } from 'react';
import ThemeContext from './context/ThemeContext'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Home';

function App() {
  const [isBlueTheme, toggleTheme] = useState(true)
  const toggle = () => {
    toggleTheme((prevState) => !prevState);
  }
  return (
    <ThemeContext.Provider 
     value={{isBlueTheme, toggle:toggle}}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home} />
        </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
