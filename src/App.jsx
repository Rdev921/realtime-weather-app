
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import WeatherApp from './components/WeatherApp/WeatherApp'
import Navbar from './components/navbar/Navbar'
import Chart from './components/chart/Chart'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<WeatherApp />}></Route>
        <Route path='/chart' element={<Chart />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
