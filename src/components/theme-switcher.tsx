"use client";

import { Dot } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();
  return (
    <div className="flex items-center gap-1">
      <Button variant="link" size="free" onClick={() => setTheme("dark")}>
        <p className="text-xs font-thin">dark</p>
      </Button>
      <Dot size={10} />
      <Button variant="link" size="free" onClick={() => setTheme("light")}>
        <p className="text-xs font-thin">light</p>
      </Button>
      <Dot size={10} />
      <Button variant="link" size="free" onClick={() => setTheme("system")}>
        <p className="text-xs font-thin">system</p>
      </Button>
    </div>
  );
}
