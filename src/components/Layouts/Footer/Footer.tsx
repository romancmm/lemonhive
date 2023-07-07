import React from "react";
import s from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

function Footer() {
  return (
    <footer>
      <section className="bg-midnight text-gray-100 py-20">
        <div className="container">
          <div className="grid lg:grid-cols-12">
            <div className="col-span-5 flex flex-col gap-12">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert-0"
                src={siteConfig?.default_logo}
                alt="LEMON HIVE"
                width={145}
                height={80}
                priority
              />
              <p className="text-white">{siteConfig?.copyright}</p>
            </div>
            <div className="col-span-5 flex flex-col gap-2">
              <h6 className="text-secondary-dark text-2xl">
                {siteConfig?.city}
              </h6>
              <span>{siteConfig?.address}</span>
              <span className="hover:text-secondary-light">
                <Link href={`tell:${siteConfig?.tell}`}>
                  {siteConfig?.tell}
                </Link>
              </span>
              <span className="hover:text-secondary-light">
                <Link href={`mailto:${siteConfig?.email}`}>
                  {siteConfig?.email}
                </Link>
              </span>
            </div>

            <div className="col-span-2">
              <ul className="flex flex-col items-start gap-3">
                {siteConfig?.socialLinks?.map((item: any, i: number) => (
                  <li className={s.link} key={i}>
                    <Link href={item?.href}>{item?.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
