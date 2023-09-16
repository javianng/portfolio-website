import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: "#E7F6F2",
                    100: "#A5C9CA",
                    200: "#395B64",
                    300: "#2C3333",
                },
                LFG: {
                    50: "#E50171",
                },
                ABYA: {
                    50: "#F6F2AE",
                },
                ComputingClub: {
                    0: "#FFFFFF",
                    50: "#ADABD5",
                    100: "#2A378A",
                }
            }
        },
    },
    plugins: [
        require("daisyui")
    ],

    daisyui: {
        themes: ["light"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "dark", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },
} satisfies Config;
