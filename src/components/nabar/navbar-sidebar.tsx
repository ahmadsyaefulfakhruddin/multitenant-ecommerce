import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { navbarItems } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

export function NavbarSidebar() {
  return (
    <SheetContent side={"left"}>
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
        <SheetDescription>Where do you go?.</SheetDescription>
      </SheetHeader>
      <ScrollArea className="h-full">
        <ul className="flex flex-col w-full first:border-t">
          {navbarItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <li className="border-b pl-2 hover:bg-primary hover:text-primary-foreground py-4 w-full">
                {item.children}
              </li>
            </Link>
          ))}
        </ul>
      </ScrollArea>

      <SheetFooter>
        <ul className="h-full gap-4 flex w-full flex-wrap">
          <li>
            <Button asChild size={"lg"} variant="outline">
              <Link href="/auth/login">Login</Link>
            </Button>
          </li>
          <li>
            <Button asChild size={"lg"}>
              <Link href="/auth/login">Register</Link>
            </Button>
          </li>
        </ul>
      </SheetFooter>
    </SheetContent>
  );
}
