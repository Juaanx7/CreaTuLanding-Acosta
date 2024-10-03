import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (    
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'¡Bienvenido!'}/>
    </div>
      
  )
}

export default App
