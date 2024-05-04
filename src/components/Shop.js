import { useState } from "react";
import placeholder from "../static/logo2.jpg";
import { FaAngleRight } from "react-icons/fa6";
import Breadcrumbs from "./Breadcrumbs";
import BasicWrapper from "./BasicWrapper";
import Categories from "./Categories";

const Catalog = ({ slug }) => {
  return (
    <BasicWrapper>
      <Breadcrumbs />
      <div className=" text-[34px] font-bold">Католог товаров</div>
      <Categories />
    </BasicWrapper>
  );
};

export default Catalog;
