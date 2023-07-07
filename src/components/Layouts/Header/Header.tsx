import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";
import { siteConfig } from "@/config/site";

function Header() {
  return (
    <header className="bg-midnight data:bg-midnight sticky top-0 z-50 overflow-hidden">
      <div className="container  mx-auto">
        <nav className="py-2 md:py-3">
          <div className="px-4 mx-auto md:flex md:items-center">
            <div
              className="flex justify-between items-center"
              style={{ minWidth: 280 }}
            >
              <Link href="/" className="font-bold text-xl text-indigo-600">
                <div
                // className="col-span-3 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"
                >
                  <Image
                    // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert-0"
                    src={siteConfig?.default_logo}
                    alt="LEMON HIVE"
                    width={110}
                    height={60}
                    priority
                  />
                </div>
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
