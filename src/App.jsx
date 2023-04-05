

import { Outlet } from 'react-router-dom'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'

function App() {


  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>


    </div>
  )
}

export default App
