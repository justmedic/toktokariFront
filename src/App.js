import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Categories from "./components/Categories";
import Category from "./components/Category";
import { useEffect } from "react";
import { useG } from "./context/GlobalContext";
import axios from "axios";
import Cart from "./components/Cart";

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
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:catSlug" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
