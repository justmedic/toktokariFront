import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { catId } = useParams();

  useEffect(() => {
    const fetchProds = async () => {
      await axios(`http://localhost:8001/shop/categories/${catId}/`).then(
        (res) => console.log(res.data)
      );
    };

    fetchProds();
  }, [catId]);

  return <div>{catId}</div>;
};

export default Category;
