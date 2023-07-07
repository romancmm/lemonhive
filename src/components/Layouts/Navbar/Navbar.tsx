"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div
        id="navbar-collapse"
        className="flex flex-1 items-center z-50 relative"
      >
        <ul className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 justify-end items-center relative">
          {siteConfig?.mainNav?.map((item: NavItem) => (
            <li key={item?.href} className="group">
              <Link
                href={item?.href ?? "/"}
                className={cn(
                  `flex gap-1 items-center p-1 lg:px-4 text-blue-100 text-sm rounded hover:text-secondary-light transition-colors duration-300 uppercase`,
                  {
                    ["text-white font-bold"]: pathname === item?.href,
                  }
                )}
              >
                {item?.title} {item?.children && <ChevronDown height={20} />}
              </Link>

              {item?.children && (
                <ul className="absolute bg-white w-60 top-8 rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg z-30">
                  {item?.children?.map((child: NavItem, i: number) => (
                    <li
                      className="text-sm hover:bg-slate-100 leading-8 border-b border-zinc-100 last:border-b-0"
                      key={i}
                    >
                      <Link
                        href={`${item?.href}/${child?.href}` ?? "/"}
                        className={cn(`block p-3 lg:px-4 text-sm uppercase`, {
                          ["text-red-500 font-bold"]: pathname === child?.href,
                        })}
                      >
                        {child?.title}
                      </Link>{" "}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <Link
            href="#"
            className="p-2 lg:px-4 md:mx-2 text-secondary-light text-center border border-solid border-secondary-light rounded-full hover:bg-secondary-light hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
          >
            Get in Touch
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
