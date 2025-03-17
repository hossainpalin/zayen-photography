"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface IMenuProps {
  className?: string;
  onClose?: () => void;
}

export default function MenuList({ className, onClose }: IMenuProps) {
  const pathname = usePathname();

  const menuItems = useMemo(
    () => [
      { title: "Home", href: "/", isActive: pathname === "/" },
      { title: "About", href: "/about", isActive: pathname === "/about" },
      {
        title: "Projects",
        href: "/projects",
        isActive: pathname === "/projects"
      },
      { title: "Contact", href: "/contact", isActive: pathname === "/contact" },
      { title: "Pricing", href: "/pricing", isActive: pathname === "/pricing" }
    ],
    [pathname]
  );

  return (
    <ul className="flex flex-col items-center space-y-4">
      {menuItems.map((item) => (
        <li
          onClick={() => onClose?.()}
          key={item.title}
          className={cn(
            `font-light text-black/75 hover:text-black ${className}`,
            item.isActive && "text-black"
          )}
        >
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
