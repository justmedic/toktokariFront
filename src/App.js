import { Route, Routes, Navigate, useParams } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { useEffect } from "react";
import { useG } from "./context/GlobalContext";
import axios from "axios";
import Cart from "./components/Cart";
import Category from "./components/Category";

function CatRoutes() {
  const { catSlug } = useParams();
  return (
    <Routes>
      <Route path="/" element={<Category slug={catSlug} />} />
      <Route path=":catSlug/*" element={<CatRoutes />} />
    </Routes>
  );
}

function ShopRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path=":catSlug/*" element={<CatRoutes />} />
    </Routes>
  );
}

function App() {
  const { setCats } = useG();

  useEffect(() => {
    const homeUrl = "http://127.0.0.1:8000/";
    const fetchHome = async () => {
      await axios
        .get(homeUrl)
        .then((res) => res.data)
        .then((data) => {
          setCats(data.category_list);
        });
    };

    fetchHome();
  }, [setCats]);

  return (
    <div className="App">
      <Header />
      {/* Use Navigate component to redirect from root to /home */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop/*" element={<ShopRoutes />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
