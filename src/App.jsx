import { useState } from 'react'
import Navbar from './components/Navbar'
import Cardsmenu from './components/Cardsmenu'
import Business_banner from './components/Business_banner'
import About_us from './components/About_us'
import Form from './components/Form'
import Testinomial from './components/Testinomial'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Cardsmenu/>
    <Business_banner/>
    <About_us/>
    <Form/>
    <Testinomial/>
    </>
  )
}

export default App
