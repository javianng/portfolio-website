"use client";

import Link from "next/link";
import * as React from "react";
import { cn } from "~/lib/utils";
import { Menu } from "lucide-react";
import { PROJECT_DETAILS } from "../homepage/Work/WorkDetailsV2";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Drawer,
} from "../ui/drawer";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Navbar() {
  return (
    <>
      <Drawer>
        <div className="sticky top-[85vh] z-50 h-0 sm:hidden">
          <DrawerTrigger>
            <div className="ml-8 rounded-full bg-neutral-800 p-3 shadow-md">
              <Menu className="w-5 text-white" />
            </div>
          </DrawerTrigger>
        </div>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>About Javian Ng</DrawerTitle>
            <DrawerDescription className="flex flex-col gap-2 pt-6">
              <a href={"/work"}>My Works</a>
              <a href={"/blog"}>Blog</a>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <div className="rounded-md bg-neutral-200 py-2 ">Close</div>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <div className="sticky top-4 z-50 hidden h-0 w-full sm:block">
        <div className="flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#AboutMe" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Me
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>My Expertise</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <p className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none duration-200 hover:bg-brand-50 focus:shadow-md dark:hover:bg-brand-300">
                          <span className="mb-2 mt-4 text-lg font-medium">
                            My Expertise
                          </span>
                          <span className="text-muted-foreground text-sm leading-tight">
                            What I am good at!
                          </span>
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#Expertise" title="Frontend Development">
                      UI/UX Design and responsiveness
                    </ListItem>
                    <ListItem href="#Expertise" title="Backend Development">
                      Design and implement backend and authentications services
                    </ListItem>
                    <ListItem href="#Expertise" title="Data Analytics">
                      Analytical and Detailed Oriented
                    </ListItem>
                    <ListItem href="#Expertise" title="Software Development">
                      Functional and OO programming
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>My Work</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    {PROJECT_DETAILS.slice(0, 5).map((componentDetails, i) => (
                      <ListItem
                        key={i}
                        href="#Work"
                        title={componentDetails.title}
                      >
                        <p className="line-clamp-2">
                          {componentDetails.description}
                        </p>
                      </ListItem>
                    ))}
                    <ListItem key={6} href="/work" title="More Projects">
                      Check out all my projects!
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Professional Experiences
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <p className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none duration-200 hover:bg-brand-50 focus:shadow-md dark:hover:bg-brand-300">
                          <span className="mb-2 mt-4 text-lg font-medium">
                            Where have I worked / interned
                          </span>
                          <span className="text-muted-foreground text-sm leading-tight">
                            My journey of growth and learnings beyond the
                            university
                          </span>
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#Experience" title="Computing Club">
                      Preside over the club's initiatives and oversee policy
                      revamps for the students' wellbeing.
                    </ListItem>
                    <ListItem href="#Experience" title="LFG">
                      Interned as a software engineer. Participated in product
                      reviews and business development opportunities.
                    </ListItem>
                    <ListItem
                      href="#Experience"
                      title="ASEAN Business Youth Association"
                    >
                      Worked as a website developer lead.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#Testimonials" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Testimonials
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-brand-50 focus:shadow-md dark:hover:bg-brand-300",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
