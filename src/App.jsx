import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './container/Home'
import Shop from "./components/Shop"
import Cart from "./components/Cart"
import Footer from './container/Footer'
import Notifications from "./components/Notifications"

function App() {
 

  return (
    <>

  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="/notification" element={<Notifications/>}/>
      {/* <Route path="/Footer" element={<Footer/>}/> */}
    </Routes>
    <Footer/>
  </Router>
    </>
  )
}

export default App
