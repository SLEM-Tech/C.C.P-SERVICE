"use client";

import Link from "@node_modules/next/link";
import {
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
} from "@node_modules/react-icons/fa";
import Image from "next/image";

const footerLinks = [
  {
    heading: "Categories",
    links: ["Psychology", "Self-Help", "Romance", "Mystery"],
  },
  {
    heading: "For kids",
    links: ["Games", "Comics", "Fantasy"],
  },
  {
    heading: "E-Books",
    links: ["Fiction", "Historical", "Horror"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C48FF] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        <div className="flex flex-col gap-6">
          <div className="text-lg font-bold">
            {" "}
            <Link
              href="/"
              className="text-lg font-bold tracking-widest text-purple-700">
              <Image
                src="/assets/ccp-service-logo.png"
                quality={100}
                width={100}
                height={100}
                alt="C.C.P Service Retreat Limited Logo"
                className="h-auto w-auto invert" 
              />
            </Link>
          </div>
          <div className="flex gap-4 text-white">
            <FaFacebookF className="w-5 h-5" />
            <FaInstagram className="w-5 h-5" />
            <FaTwitter className="w-5 h-5" />
          </div>
        </div>

        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-3">{section.heading}</h3>
            <ul className="space-y-1 text-sm">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-3 text-sm">
          <h3 className="font-semibold mb-3">Help & Contacts</h3>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-white w-4 h-4" />
            <span>+445 87 999 000</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-white w-4 h-4" />
            <span>Mo–Fri, 9 AM to 11 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-white w-4 h-4" />
            <span>irunam@store.ro</span>
          </div>
        </div>

        <div className="lg:col-span-1 sm:col-span-2 flex flex-col justify-between gap-4">
          <p className="text-sm leading-relaxed">
            If you have questions, you can contact us or we will do it for you.
          </p>
          <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-[#2C48FF] transition-all text-sm w-fit">
            Request a call
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col sm:flex-row items-center justify-between border-t border-white/30 pt-4">
        <p className="text-xs text-white/80">
          © All copyrights are reserved. Irunam 2025.
        </p>
        <div className="flex gap-3 mt-3 sm:mt-0">
          {/* <Image
            src="/ccp-limited/ebook/payment/paypal.png"
            alt="PayPal"
            width={40}
            height={24}
          /> */}
          <Image
            src="/ccp-limited/paypal.png"
            alt="MasterCard"
            width={40}
            height={24}
          />
          <Image
            src="/ccp-limited/VISA-card-logo- 1.png"
            alt="Visa"
            width={40}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
}
