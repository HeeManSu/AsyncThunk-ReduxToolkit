import { Route, Routes } from 'react-router-dom'
import './App.css'
import Create from './components/Create'
import Read from './components/Read'
import NavbarComponent from './components/NavbarComponent'



function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
      </Routes>
    </div>
  )
}
export default App
