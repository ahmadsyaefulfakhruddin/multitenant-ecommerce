"use client";

import { Button } from "@/components/ui/button";
import { cn, navbarItems } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { NavbarSidebar } from "./navbar-sidebar";
import { ModeToggle } from "../mode-toggle";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

type NavItemProps = {
  href: string;
  children: string;
  isActive: boolean;
};

const NavItem = ({ href, children, isActive }: NavItemProps) => {
  return (
    <li>
      <Button
        asChild
        variant="outline"
        className={cn(
          "bg-transparent border-none hover:border rounded-full",
          isActive &&
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground dark:bg-primary dark:hover:bg-primary"
        )}
      >
        <Link href={href}>{children}</Link>
      </Button>
    </li>
  );
};

const Navbar = () => {
  const path = usePathname();

  return (
    <header className="flex justify-between border h-20 items-center">
      <Link href="/" className={cn("text-4xl ml-6", poppins.className)}>
        E-Commerce
      </Link>

      <nav>
        <ul className="hidden lg:flex gap-4">
          {navbarItems.map((item) => (
            <NavItem
              href={item.href}
              key={item.href}
              isActive={path === item.href}
            >
              {item.children}
            </NavItem>
          ))}
        </ul>
      </nav>

      <ul className="h-full hidden lg:flex items-center">
        <li className="p-4">
          <ModeToggle />
        </li>
        <li className="h-full">
          <Button
            asChild
            className="rounded-none bg-transparent border-y-0 h-full px-6"
            variant="outline"
          >
            <Link href="/auth/login">Login</Link>
          </Button>
        </li>
        <li className="h-full">
          <Button asChild className="rounded-none border-y-0 h-full px-6">
            <Link href="/auth/login">Register</Link>
          </Button>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger asChild className="flex lg:hidden">
          <Button
            asChild
            variant="outline"
            size={"icon"}
            className="border-none mr-6"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <NavbarSidebar />
      </Sheet>
    </header>
  );
};

export default Navbar;
