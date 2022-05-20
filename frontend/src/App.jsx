
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import DashBoard from './components/Dashboad/DashBoard';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard' element={<DashBoard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
