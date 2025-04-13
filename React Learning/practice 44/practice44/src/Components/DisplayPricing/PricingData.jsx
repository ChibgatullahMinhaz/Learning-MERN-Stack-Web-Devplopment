import React, { use } from "react";
import PricingCart from "./PricingCart";

const PricingData = ({ pricingPromies }) => {
  const resove = use(pricingPromies);
  console.log(resove);
  return (
    <div>
      <h1 className="text-3xl font-bold text-orange-500 text-center">
        Membership Plan
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resove.map((data, index) => (
          <PricingCart data={data} key={index}></PricingCart>
        ))}
      </div>
    </div>
  );
};

export default PricingData;
