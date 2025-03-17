"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MenuList from "@/components/menu-list";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex p-4 lg:hidden">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="text-left text-2xl leading-6 text-black/90">
          Zayen <br /> Photography
        </Link>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center justify-between text-gray-600 hover:text-gray-800"
        >
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 z-10 flex size-full flex-col items-center justify-center bg-white p-4"
          >
            <button
              className="absolute right-4 top-4 text-gray-600 hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={28} />
            </button>

            <MenuList
              onClose={() => setIsMenuOpen(false)}
              className="text-3xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
