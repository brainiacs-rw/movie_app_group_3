import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Admin from './Admin'
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
