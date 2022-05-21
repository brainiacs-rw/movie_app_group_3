import './App.css'
import Admin from './components/Dashboad/Admin'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import DashBoard from './components/Dashboad/DashBoard';
import MoviewPreview from './components/Dashboad/Preview/MoviewPreview';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard' element={<DashBoard />}/>
          <Route path='/preview' element={<MoviewPreview />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
