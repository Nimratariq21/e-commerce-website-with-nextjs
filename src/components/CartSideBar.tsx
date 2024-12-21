import React from 'react';
import { RxCrossCircled } from "react-icons/rx";
import Button from './Button';
import Image from 'next/image';

const CartSideBar = () => {
  return (
    <div className="absolute top-[4rem] right-5 z-[999] w-[21em] md:w-[27em] px-[2rem] border-black border py-[2rem] bg-white">
      <div className="flex justify-between items-center">
        <h1 className="md:text-[1.3em] text-[1em] tracking-wider font-[600] sm:text-[1.1em]">Shopping Cart</h1>
        <Image 
          src="/images/Lock.png" 
          width={24} 
          height={24} 
          alt="Lock Icon" 
          className="object-cover"
        />
      </div>
      <br />
      <hr className="w-full bg-[#9f9f9f] h-[1.6px]" />
      <br />
      <div className="flex items-center gap-6">
        <div className="rounded-lg md:w-[30%] bg-yellow-300">
          <Image 
            src="/images/AsgardSofa.png" 
            width={100} 
            height={100} 
            alt="Asgard Sofa" 
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[.9em] font-medium lg:text-[1.4em] md:text-[1.1em]">Asgaard Sofa</p>
          <div className="tracking-[.5em]">
            <span className="text-[.9em] text-gray-500 font-medium">1</span> X 
            <span className="text-sm md:text-[1.1em] text-yellow-400 tracking-normal font-light">Rs.250,000.00</span>
          </div>
        </div>
        <div className="p-[.5em] rounded-full bg-slate-300">
          <RxCrossCircled  size={20} color="black" />
        </div>
      </div>
      <div className="flex justify-between mt-[10vw]">
        <span className="text-lg">Subtotal</span>
        <span className="text-yellow-400 text-lg">Rs.250,000.000</span>
      </div>
      <br />
      <hr className="w-full bg-[#9f9f9f] h-[1.6px]" />
      <br />
      <div className="flex gap-4 justify-center items-center">
        <Button btnClass="px-3 py-2 border-black border rounded-lg" title="View Cart" />
        <Button btnClass="px-3 py-2 border-black border rounded-lg" title="Check Out" />
      </div>
    </div>
  );
};

export default CartSideBar;
