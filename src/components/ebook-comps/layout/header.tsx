"use client";

import useToken from "@src/components/hooks/useToken";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "react-use-cart";

import { BiHeart, BiPhone } from "react-icons/bi";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./mobilenav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const { totalItems } = useCart();
  const { token, email } = useToken();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/search?q=${searchValue}`);
    }
  };

  const handleUserIconClick = () => {
    if (token) {
      router.push("/user/dashboard");
    } else {
      router.push("/user/login");
    }
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-6 py-2 text-sm text-gray-600">
        <Link
          href="/"
          className="text-lg font-bold tracking-widest text-purple-700">
          <Image
            src="/assets/ccp-service-logo.png"
            width={100}
            height={100}
            alt="C.C.P Service Retreat Limited Logo"
            className="h-auto w-auto"
          />
        </Link>

        <div className="hidden md:flex flex-1 mx-6">
          <form onSubmit={handleSearchSubmit} className="w-full">
            <input
              type="text"
              placeholder="Type any book here"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </form>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/warranty">Warranty</Link>
          <Link href="/shipping">Shipping</Link>
          <Link href="/returns">Returns</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative text-blue-600">
            <FaShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <Link href="/wishlist" className="text-blue-600">
            <BiHeart size={20} />
          </Link>

          <button onClick={handleUserIconClick} className="text-blue-600">
            <FaUser size={20} />
          </button>

          <button
            className="ml-2 block lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}>
            <GiHamburgerMenu size={24} />
          </button>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-between px-6 py-3 text-sm border-t border-gray-100">
        <nav className="flex flex-wrap space-x-4 text-gray-700">
          <Link href="/must-read">The must read</Link>
          <Link href="/news">News</Link>
          <Link href="/promotions">Promotion of the month</Link>
          <Link href="/publishes">Publishes</Link>
          <Link href="/newsletter">Subscribe to the newsletter</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center text-blue-600 font-medium">
            <BiPhone size={16} className="mr-2" />
            +445 87 999 000
          </div>
          <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50 transition">
            Request a call
          </button>
        </div>
      </div>

      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
    </header>
  );
}
