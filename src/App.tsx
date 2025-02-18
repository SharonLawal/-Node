import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Hard from "./pages/Hard";
import ProductDetailPage from "./pages/ProductDetailPage";
import PCBuilder from "./pages/PCBuilder";
import Cart from "./pages/Cart";
import CryptoPayment from "./pages/CryptoPayment";
import PayCrypto from "./pages/PayCrypto";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/processor/:type" element={<Hard />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/pcbuilder" element={<PCBuilder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pay/crypto" element={<CryptoPayment />} />
          <Route path="/pay/crypt" element={<PayCrypto />} />
        </Routes>
      </Layout>
    </Router>
    </Provider>
  );
}

export default App;
