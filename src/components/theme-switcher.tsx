"use client";

import { Dot } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();
  return (
    <div className="flex items-center gap-1">
      <Button variant="link" size="free" onClick={() => setTheme("dark")}>
        <p className="font-thin">
          <small>dark</small>
        </p>
      </Button>
      <Dot size={10} />
      <Button variant="link" size="free" onClick={() => setTheme("light")}>
        <p className="font-thin">
          <small>light</small>
        </p>
      </Button>
      <Dot size={10} />
      <Button variant="link" size="free" onClick={() => setTheme("system")}>
        <p className="font-thin">
          <small>system</small>
        </p>
      </Button>
    </div>
  );
}
