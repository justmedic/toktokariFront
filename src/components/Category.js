import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import Categories from "./Categories";
import BasicWrapper from "./BasicWrapper";

const Category = () => {
  const { catSlug } = useParams();
  const [currentCat, setCurrentCat] = useState(null);

  useEffect(() => {
    const fetchProds = async () => {
      await axios(`http://localhost:8000/shop/categories/${catSlug}/`).then(
        (res) => {
          setCurrentCat(res.data);
        }
      );
    };

    fetchProds();
  }, [catSlug]);

  return (
    <BasicWrapper>
      <Breadcrumbs />
      {currentCat?.children && (
        <Categories subcats={currentCat.children} currCatId={currentCat.id} />
      )}
    </BasicWrapper>
  );
};

export default Category;
