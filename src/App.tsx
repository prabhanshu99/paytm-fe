import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'

function App() {

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
      </Routes>  
    </BrowserRouter>
  </div>
}

export default App
