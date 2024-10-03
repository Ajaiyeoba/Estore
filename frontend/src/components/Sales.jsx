import React, { useEffect, useState } from "react";
import { ScalingIcon } from "lucide-react";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { products } from "../assets/assets";

function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.sales));
    setSales(bestProduct.slice(0,5))
  },[])
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"New "} text2={"Sales"} />
        <p className="w-3/4 m-auto text-xs sm:text-s, md:text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          voluptates numquam. Dicta, dolorem pariatur. Reiciendis, voluptates
          quis itaque, illum officiis consequatur ducimus repellendus suscipit
          officia ea beatae veritatis fugiat eligendi.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {sales.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Sales;
