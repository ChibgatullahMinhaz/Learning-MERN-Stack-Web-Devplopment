import React from "react";
import DaisyPricingcard from "../DaisyPricingCart/DaisyPricingcard";
import { Circle } from 'lucide-react';

const PricingCart = ({ data }) => {
  const { features, price, name, popular } = data;

  return (
    <div>
      <DaisyPricingcard key={data.id} membershipt={data}></DaisyPricingcard>

      <div className="card w-96 bg-orange-600 mt-4 p-4 shadow-sm">
        {popular && (
          <span className="badge badge-xs badge-warning">Most Popular</span>
        )}
        <h1 className="font-bold text-2xl text-white">{name}</h1>
        <span className="text-xl text-white">{price}</span>
        {features.map((feature, index )=>
    <ul key={index} className="flex gap-2">
        <Circle></Circle>
        <li><a href="">{feature}</a></li>
    
    </ul>    
    )}
      <button className="btn btn-accent">Subscribe</button>
      </div>
    </div>
  );
};

export default PricingCart;
