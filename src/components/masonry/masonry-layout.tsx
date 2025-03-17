import { ReactNode } from "react";
import Masonry from "react-masonry-css";

interface IMasonryLayoutProps {
  children: ReactNode;
  breakpointCols?: { default: number; [key: number]: number };
  className: string;
  columnClassName: string;
}

export default function MasonryLayout({
  children,
  columnClassName,
  className,
  breakpointCols
}: IMasonryLayoutProps) {
  return (
    <Masonry
      breakpointCols={breakpointCols}
      className={className}
      columnClassName={columnClassName}
    >
      {children}
    </Masonry>
  );
}
