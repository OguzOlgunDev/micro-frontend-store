"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white shadow">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          prefetch={false}
          className="text-xl font-bold hover:text-blue-400"
        >
          MyStore
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <a
            href="http://localhost:3000/"
            className="hover:text-blue-400 transition"
          >
            Home
          </a>
          <Link href="/" prefetch={false}>
            Cart
          </Link>{" "}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-900 text-white">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="http://localhost:3000/"
                  className="hover:text-blue-400 transition"
                >
                  Home
                </a>
                <Link
                  href="/"
                  prefetch={false}
                  className="hover:text-blue-400 transition"
                >
                  cart
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
