import React, { useState } from "react";
import useDebounce from "./useDebounce";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const useSearch = () => {
  const [search, setSearch] = useState("");

  const { products } = useSelector((state) => state.products);

  const debounceSearch = useDebounce(search, 300);

  const filterProduct = useMemo(() => {
    return products.filter((pro) =>
      pro.title.toLowerCase().includes(debounceSearch.toLowerCase()),
    );
  }, [products, debounceSearch]);

  return { search, setSearch, filterProduct };
};

export default useSearch;
