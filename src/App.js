import { Routes, Route } from "react-router-dom";
import './App.css';
import TopNavbar from './components/TopNavbar';
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import Checkout from "./pages/Checkout";
import ProductViewPage from "./pages/ProductViewPage";
import Shop from './pages/Shop';
import { ProductProvider } from "./state/ProductProvider";

function App() {
  return (
    <ProductProvider>
    <main className="overflow-x-hidden">
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/product/:productId" element={<ProductViewPage />} />
        <Route path="/checkout/:productId" element={<Checkout />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    </main>
    </ProductProvider>
  );
}

export default App;
