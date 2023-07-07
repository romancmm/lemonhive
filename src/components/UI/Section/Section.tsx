import React, { FC } from "react";
import s from "./Section.module.css";
import { cn } from "@/lib/utils";

interface SectionProps {
  className?: string;
  children?: any;
  el?: HTMLElement;
  clean?: boolean;
  variant?: "default" | "light" | "dark";
}

const Section: FC<SectionProps> = ({
  children,
  className,
  variant = "default",
  el = "div",
  clean,
}) => {
  const rootClassName = cn(className, s.root, {
    [s?.default]: variant === "default",
    [s.light]: variant === "light",
    [s.dark]: variant === "dark",
  });

  let Component:
    | React.ComponentType<React.HTMLAttributes<HTMLDivElement>>
    | any = el as any;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Section;
