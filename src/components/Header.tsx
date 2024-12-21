'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { IoSearch } from 'react-icons/io5';
import { FaCartShopping } from 'react-icons/fa6';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";
import CartSideBar from './CartSideBar';


const Header = () => {
  const [sideBarDisplay, setSideBarDisplay] = useState(false);
  const [cartBarOpen, setCartBarOpen] = useState(false);
  const navElements = ['Home', 'Shop', 'About', 'Contact'];

  return (
    <header className="px-6 w-dvw relative flex items-center py-4 gap-4 justify-between lg:py-6 md:px-8 lg:px-16 bg-[#FBEBB5]">
      <div className="font-bold text-[1.3em] sm:text-[1.5em] cursor-pointer md:text-[1.6em] lg:text-[1.9em] tracking-wider">
        <Link href="/">Trendmart</Link>
      </div>
      <nav className="flex items-end md:gap-[2.7em]">
        {navElements.map((navItem, index) => (
          <Link
            key={index}
            className="hidden md:block md:text-[1em] lg:text-lg tracking-wider font-light"
            href={index === 0 ? '/' : `/${navItem.toLowerCase()}`}
          >
            {navItem}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
        <Link href="/account">
          <FaRegUser size={24} />
        </Link>
        <Link href="/">
          <IoSearch size={24} />
        </Link>
        <Link href="/">
          <FaRegHeart size={24} />
        </Link>
        <div
          className="cursor-pointer"
          onClick={() => setCartBarOpen((prev) => !prev)}
        >
          <FaCartShopping size={24} />
        </div>
        <div
          className="md:hidden block cursor-pointer"
          onClick={() => setSideBarDisplay((prev) => !prev)}
        >
          <RxHamburgerMenu size={24} />
        </div>
      </div>

      {sideBarDisplay && (
        <div
          className={`flex absolute bg-white right-1 top-4 rounded-2xl flex-col items-center px-[1.5rem] gap-8 py-[2rem] z-[999] min-h-[100vh] w-screen sm:w-[14em]`}
        >
          <div className="w-full relative">
            <div
              className="cursor-pointer rounded-full text-black"
              onClick={() => setSideBarDisplay(false)}
            >
              <RxCrossCircled size={24} />
            </div>
          </div>
          {navElements.map((navItem, index) => (
            <Link
              href={index === 0 ? '/' : `/${navItem.toLowerCase()}`}
              onClick={() => setSideBarDisplay(false)}
              key={index}
              className="font-[500] hover:text-[#5c5ccf] text-black leading-0 tracking-wider text-[1.1rem]"
            >
              {navItem}
            </Link>
          ))}
        </div>
      )}

      {cartBarOpen && <CartSideBar />}
    </header>
  );
};

export default Header;
