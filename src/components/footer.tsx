import { navbarItems } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-4 border">
      {/* Hak Cipta */}
      <span className="text-sm">
        &copy; 2025 E-Commerce. All rights reserved.
      </span>

      <ul className="flex flex-wrap space-x-4 mt-4 md:mt-0">
        {navbarItems.map((item) => (
          <li key={item.href}>
            <Button asChild variant="link" className="border-none">
              <Link href={item.href}>{item.children}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
