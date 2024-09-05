import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Formulario></Formulario>
    </>
  )
}

export default App
