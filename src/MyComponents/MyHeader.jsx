import React, { useState } from "react";
import purzle from "../assets/purzle.svg";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { X, Menu, Search, Heart, ShoppingBag, User } from "lucide-react";

const MyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const components = [
    {
      title: "Men",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Women",
      href: "/docs/primitives/hover-card",
      description: "For sighted users to preview content available behind a link.",
    },
    {
      title: "Digital Products",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task.",
    },
    {
      title: "Hair and Beauty",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Accessories",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Shoes",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
    {
        title: "Fragrances",
        href: "/docs/primitives/tooltip",
        description:
          "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
    {
        title: "custom Made",
        href: "/docs/primitives/tooltip",
        description:
          "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

  return (
    <header className="bg-white">
      {/* Highlight Section */}
      <div className="bg-[#A294F9] text-white py-2 text-center">
        <p>
          <span className="text-gold font-semibold">FREE</span> Express Shipping
          on orders over NGN100,000.00
        </p>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6 text-[#A294F9]" />
          </button>
          <a href="#">
            <Search className="h-6 w-6 text-[#A294F9]" />
          </a>
        </div>

        <a href="/" className="flex-1 flex justify-center">
          <img src={purzle} alt="logo" className="h-8 w-auto" />
        </a>

        <div className="flex items-center space-x-4">
          <ShoppingBag className="h-6 w-6 text-[#A294F9]" />
          <User className="h-6 w-6 text-[#A294F9]" />
        </div>
      </div>

      {/* Modified Mobile Slide-out Menu */}
      <div 
        className={`fixed inset-0 bg-white transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 lg:hidden overflow-y-auto`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <img src={purzle} alt="logo" className="h-8 w-auto" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[#A294F9]"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="space-y-8">
            <a href="/" className="block text-xl text-[#A294F9] hover:text-[#8275c7]">
              Home
            </a>
            <div className="space-y-4">
              <p className="text-xl text-[#A294F9]">Featured</p>
              <div className="pl-4 space-y-3">
                <a href="/new-arrivals" className="block text-lg text-gray-600 hover:text-[#A294F9]">New Arrivals</a>
                <a href="/best-sellers" className="block text-lg text-gray-600 hover:text-[#A294F9]">Best Sellers</a>
                <a href="/sale" className="block text-lg text-gray-600 hover:text-[#A294F9]">Sale</a>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xl text-[#A294F9]">Categories</p>
              <div className="pl-4 space-y-3">
                {components.map((component) => (
                  <a 
                    key={component.title}
                    href={component.href}
                    className="block text-lg text-gray-600 hover:text-[#A294F9]"
                  >
                    {component.title}
                  </a>
                ))}
              </div>
            </div>
            <a href="/vendor" className="block text-xl text-[#A294F9] hover:text-[#8275c7]">
              Vendor
            </a>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Desktop Header - Rest remains unchanged */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between px-8 py-4">
          <a href="/">
            <img src={purzle} alt="logo" className="h-10 w-auto" />
          </a>

          <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden shadow-md w-1/3">
            <input
              type="text"
              placeholder="Searching for..."
              className="w-full py-2 px-4 bg-transparent text-gray-800 placeholder-black focus:outline-none"
            />
            <button className="px-4">
              <Search className="h-5 w-5 text-gray-800" />
            </button>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#wishlist">
              <Heart className="h-6 w-6 text-[#A294F9]" />
            </a>
            <a href="#cart">
              <ShoppingBag className="h-6 w-6 text-[#A294F9]" />
            </a>
            <a href="#profile">
              <User className="h-6 w-6 text-[#A294F9]" />
            </a>
          </div>
        </div>

        <nav className="border-t border-gray-200">
          <NavigationMenu className="flex justify-center py-4">
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Featured</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            New Arrivals
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI and
                            Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Best Sellers">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Top Rated">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Sale"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/vendor"
                >
                  Vendor
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MyHeader;