import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './pages/Home '
import Store from './pages/Store'
import About from './pages/About'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import ModalComp from './components/ModalComp'
import { useEffect, useState } from 'react'
import Contact from './pages/Contact'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp' 
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext'

type CartItem = {
  id:number
  image: string
  title: string
  description: string
  category: string
  price: number
}


function App() {

  const [modalShow, setModalShow] = useState(true);


  return (
    <ShoppingCartProvider>

      <ModalComp
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Navbar />
      <Container className='mb-4' style={{marginTop: "70px"}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}



export default App
