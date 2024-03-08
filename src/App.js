import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Categories from "./components/Categories";
import Category from "./components/Category";
import { useEffect } from "react";
import { useG } from "./context/GlobalContext";
import axios from "axios";

function App() {
  const { setCats } = useG();

  useEffect(() => {
    const homeUrl = "http://localhost:8001/";
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
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:catId" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
