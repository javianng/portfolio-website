"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "~/lib/utils";
import { PROJECT_DETAILS } from "../homepage/Work/WorkDetailsV2";

export default function Navbar() {
  return (
    <div className="sticky top-2 z-50 h-0 w-full">
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
                      <p className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md">
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
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <p className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md">
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
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
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
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
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
