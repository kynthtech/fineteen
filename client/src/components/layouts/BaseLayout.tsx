import clsx from "clsx";
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function BaseLayout({ children, className }: Props) {
  return (
    <div className={clsx("w-full dark:bg-gray-900", className)}>{children}</div>
  );
}

export default BaseLayout;
