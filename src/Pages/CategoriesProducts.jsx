import React from "react";

import usecategoriesFetch from "../hooks/usecategoriesFetch";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import HomeProducts from "../components/HomeProducts";
import useSearch from "../hooks/useSearch";

const CategoriesProducts = () => {
  const { categories, selectCategoryProduct } = useSelector(
    (state) => state.categories,
  );

  const { handlecategory } = usecategoriesFetch();

  const { search, setSearch, filterProduct } = useSearch();

  return (
    <>
      <div className="p-4 bg-white  pt-16 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold p-4">
          Categories By Products
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 p-4">
          <div className="flex flex-col gap-4 p-4 border border-gray-300 rounded-lg shadow-md">
            <h2>Filters</h2>
            <hr className="text-gray-300" />
            <h2 className="text-lg font-semibold">Category</h2>
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full p-2 border border-gray-400 rounded-md outline-none"
            />
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => handlecategory(category)}
                className="flex items-center gap-4"
              >
                <input type="checkbox" className="p-2" />{" "}
                <label htmlFor="" className="text-md">
                  {category}
                </label>
              </div>
            ))}
          </div>
          <div className="p-4">
            <div
              className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))]
md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]
gap-4 md:gap-6"
            >
              {selectCategoryProduct.map((cat) => (
                <ProductCard key={cat.id} product={cat}></ProductCard>
              ))}

              {search.trim().length > 0 ? (
                filterProduct.map((pro) => (
                  <ProductCard key={pro.id} product={pro}></ProductCard>
                ))
              ) : (
                <HomeProducts></HomeProducts>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesProducts;
