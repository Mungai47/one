import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Contacts from "./pages/Contacts"


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/services" element= {<Services />} />
      <Route path="/portfolio" element ={<Portfolio />} />
      <Route path="/contacts" element ={<Contacts />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
