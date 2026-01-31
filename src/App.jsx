import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Viewalluser from './usercrud/Viewall'
import Deleteuser from './usercrud/Delete'
import Createuser from './usercrud/Create'
import Updateuser from './usercrud/Update'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">View All User</Nav.Link>{"   "}
            <Nav.Link href="/create">Create User</Nav.Link>{"   "}
            <Nav.Link href="/update">Update User</Nav.Link>{"   "}
            <Nav.Link href="/delete">Delete User</Nav.Link>{"   "}
          </Nav>
        </Container>
      </Navbar>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Viewalluser></Viewalluser>}></Route>
          <Route path='/create' element={<Createuser></Createuser>}></Route>
          <Route path='/update' element={<Updateuser></Updateuser>}></Route>
          <Route path='/delete' element={<Deleteuser></Deleteuser>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
