"use client";

import Image from "@node_modules/next/image";
import Link from "next/link";
import { BiPhone, BiX } from "react-icons/bi";

export default function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-40 bg-white shadow-md p-6 md:hidden">
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-bold text-purple-700">
          <Image
            src="/assets/ccp-service-logo.png"
            width={100}
            height={100}
            alt="C.C.P Service Retreat Limited Logo"
            className="h-auto w-auto"
          />
        </div>
        <button onClick={onClose}>
          <BiX size={28} className="text-gray-700" />
        </button>
      </div>

      <nav className="flex flex-col space-y-4 text-gray-700">
        <Link href="#" onClick={onClose}>
          The must read
        </Link>
        <Link href="#" onClick={onClose}>
          News
        </Link>
        <Link href="#" onClick={onClose}>
          Promotion of the mount
        </Link>
        <Link href="#" onClick={onClose}>
          Publishes
        </Link>
        <Link href="#" onClick={onClose}>
          Subscribe to the newsletter
        </Link>
      </nav>

      {/* Search Field */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Type any book here"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>

      <div className="mt-6 flex items-center justify-between text-blue-600">
        <div className="flex items-center font-medium">
          <BiPhone size={18} className="mr-2" />
          +445 87 999 000
        </div>
        <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50 transition">
          Request a call
        </button>
      </div>
    </div>
  );
}
