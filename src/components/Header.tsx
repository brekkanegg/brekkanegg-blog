"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}
const menuItems: MenuItem[] = [
  { name: "Blog", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="flex list-none">
        {menuItems.map((item) => (
          <div key={item.href} className="mr-4 md:mr-8">
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-gray-900",
                pathname === item.href && "font-semibold"
              )}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export const Header: FunctionComponent = () => {
  return (
    <section className="flex items-center justify-between mt-16 mb-12">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
        Blog.
      </h1>
      <Navigation />
    </section>
  );
};