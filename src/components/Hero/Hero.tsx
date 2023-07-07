import React from "react";
import { Container, Section } from "../UI";
import Link from "next/link";
import s from "./Hero.module.css";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="h-full flex flex-col items-center justify-center gap-16">
          <h1 className="text-8xl mx-auto text-center font-semibold leading-tight">
            <span className="text-secondary-light">Innovative Solutions</span>{" "}
            <br />
            for a <span>Digital World</span> <br /> <span>Trusted Agency</span>
          </h1>
          <h4 className="text-2xl">
            Elevate Your Brand: Powerhouse Agency for Impactful Strategies
          </h4>
          <span>
            <Link href="#" className={cn(s.btn)}>
              Our Services
            </Link>
            <Link
              href="#"
              className="p-3 md:-mt-3 lg:px-5 md:mx-2 bg-gradient-to-r from-secondary-light to-secondary-dark text-center text-gray-800 border border-solid border-secondary-light rounded-full hover:bg-secondary-dark transition-colors duration-300"
            >
              Work With Us
            </Link>
          </span>
        </div>
      </Container>
    </Section>
  );
}
