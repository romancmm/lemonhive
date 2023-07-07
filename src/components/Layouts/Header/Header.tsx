import React from "react";
import Link from "next/link";
import Navbar from "../Navbar";
import { Container, Logo } from "@/components/UI";
import { AlignJustifyIcon } from "lucide-react";

function Header() {
  return (
    <header className="bg-midnight data:bg-midnight sticky top-0 z-50 overflow-hidden">
      <Container>
        <nav className="py-2 md:py-3">
          <div className="mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <Link href="/">
                <Logo width={110} height={60} />
              </Link>
              <button
                className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                id="navbar-toggle"
              >
                <AlignJustifyIcon />
              </button>
            </div>

            {/* Main Navbar Component */}
            <Navbar />
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
