import { useState } from 'react'
import Navbar from './components/Navbar'
import Cardsmenu from './components/Cardsmenu'
import Business_banner from './components/Business_banner'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Cardsmenu/>
    <Business_banner/>
    </>
  )
}

export default App
