import Home from './screens/Home.screen';
import Sign from './screens/SignUp.screen';
import TestVision from './screens/TestVision.screen';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Sign/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/test-vision" element={<TestVision />} />
    </Routes>
  );
};

export default App;
