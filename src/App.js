import { Routes, Route } from "react-router-dom";
import './App.css';
import TopNavbar from './components/TopNavbar';
import ProductViewPage from "./pages/ProductViewPage";
import Shop from './pages/Shop';

function App() {
  return (
    <main className="overflow-x-hidden">
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/product/:productId" element={<ProductViewPage />} />
      </Routes>
    </main>
  );
}

export default App;
