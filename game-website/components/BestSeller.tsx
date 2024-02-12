import React from 'react'
import ProductCard from './Helper/ProductCard';

const BestSeller = () => {
  return (
    <div className="bg-gray-900 pt-[4rem] pb-[3rem]">
      <div className="w-[95%] mx-auto flex items-center justify-between">
        <h1 className="md:text-[28px] text-[22px] lg:text-[34px] text-white">
          Best Seller
        </h1>
        <button className="text-[13px] md:text-[15px] text-yellow-300 ">
          VIEW ALL PRODUCT
        </button>
      </div>
      <div className="grid mt-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[95%] mx-auto ">
        <div>
          <ProductCard
            title="House of Fire"
            actualPrice="$49.99"
            discountPrice="$35.99"
            category="Action"
            image="/images/g4.jpg"
          />
        </div>
        <div>
          <ProductCard
            title="Assassin's Creed"
            actualPrice="$69.99"
            discountPrice="$55.99"
            category="Action"
            image="/images/g5.jpg"
          />
        </div>
        <div>
          <ProductCard
            title="Space Fight"
            actualPrice="$29.99"
            discountPrice="$15.99"
            category="Adventure"
            image="/images/g8.jpg"
          />
        </div>
        <div>
          <ProductCard
            title="Super Cars 2024"
            actualPrice="$79.99"
            discountPrice="$65.99"
            category="Action"
            image="/images/g7.jpg"
          />
        </div>
        <div>
          <ProductCard
            title="Zombie House"
            actualPrice="$39.99"
            discountPrice="$29.99"
            category="Action"
            image="/images/g2.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default BestSeller
