import React from "react";
import Link from "next/link";
import Navbar from "../Navbar";
import { Logo } from "@/components/UI";

function Header() {
  return (
    <header className="bg-midnight data:bg-midnight sticky top-0 z-50 overflow-hidden">
      <div className="container mx-auto">
        <nav className="py-2 md:py-3">
          <div className="px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <Link href="/">
                <Logo width={110} height={60} />
              </Link>
              <button
                className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                id="navbar-toggle"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <Navbar />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
