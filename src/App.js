import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import Welcome from './pages/Welcome';
import ImageUpload from './pages/ImageUpload';
// import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />}>
        <Route index element={<Welcome />} />
      </Route>
      <Route path="/image-upload" element={<ImageUpload />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
