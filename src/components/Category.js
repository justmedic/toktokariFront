import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import Categories from "./Categories";
import BasicWrapper from "./BasicWrapper";
import RenderProducts from "./RenderProducts";
import { useG } from "../context/GlobalContext";

const Category = () => {
  const { catSlug } = useParams();

  const { catNames } = useG();

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

  useEffect(() => {
    console.log(currentCat);
  }, [currentCat]);

  return (
    <BasicWrapper>
      <Breadcrumbs />
      <div className=" text-[34px] font-bold">{catNames[catSlug]}</div>
      {/* {currentCat !== null && currentCat?.children ? (
        <Categories subcats={currentCat.children} currCatId={currentCat.id} />
      ) : (
        <RenderProducts items={currentCat} />
      )} */}
      {currentCat !== null ? (
        currentCat.products.length > 0 ? (
          <RenderProducts items={currentCat.products} />
        ) : (
          <Categories subcats={currentCat.children} currCatId={currentCat.id} />
        )
      ) : (
        <>Загрузка</>
      )}
    </BasicWrapper>
  );
};

export default Category;
