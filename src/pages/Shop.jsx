import React from "react";
import useSWR from "swr";
import PageLoading from "../components/PageLoading";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const Shop = () => {
  const fetcher = async () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json());
  const { data: products, isLoading, error } = useSWR("/products", fetcher);

  if (isLoading) {
    return (
      <>
      
        <section>
          <h2 className="my-10 text-center text-2xl font-bold">Shop</h2>
          <PageLoading />
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h2 className="my-10 text-center text-2xl font-bold">
          Error while fetching products.
        </h2>
      </>
    );
  }

  return (
    <section>
      <Navbar />
      <h2 className="my-10 text-center text-3xl font-bold">Shop</h2>
      <div className="flex flex-col md:flex-row mb-10 mx-10 gap-10 flex-wrap">
        {products?.slice(0, 15)?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
