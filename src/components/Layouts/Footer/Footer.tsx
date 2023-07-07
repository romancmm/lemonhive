import React from "react";
import s from "./Footer.module.css";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {Section, Container, Logo } from "@/components/UI";

function Footer() {
  return (
    <footer>
      <Section>
        <Container>
          <div className="grid lg:grid-cols-12">
            <div className="col-span-5 flex flex-col gap-10">
              <Logo width={145} height={80} />

              <p className="text-white">
                © {new Date().getFullYear()}{" "}
                <span className="text-secondary-light">{siteConfig?.name}</span>
                . All rights reserved.
              </p>
            </div>
            <div className="col-span-5 flex flex-col gap-3">
              <h6 className="text-secondary-dark uppercase">
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
        </Container>
      </Section>
    </footer>
  );
}

export default Footer;
