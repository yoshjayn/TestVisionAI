import TestVision from './components/TestVision/TestVision'
import LandingPage from './components/TestVision/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/test-vision" element={<TestVision />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
    </Router>
    </>
    
  )
}

export default App
