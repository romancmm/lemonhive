import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface ContainerProps {
  className?: string;
  children?: any;
  el?: HTMLElement;
  clean?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el = "div",
  clean,
}) => {
  const rootClassName = cn(className, {
    "container mx-auto px-4": !clean,
  });

  let Component:
    | React.ComponentType<React.HTMLAttributes<HTMLDivElement>>
    | any = el as any;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
