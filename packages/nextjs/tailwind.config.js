module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#FFD700",
          "primary-content": "#000000",
          secondary: "#FFC300",
          "secondary-content": "#E6E6E6",
          accent: "#FFDD00",
          "accent-content": "#000000",
          neutral: "#1A1A1D",
          "neutral-content": "#E6E6E6",
          "base-100": "#0D0D0D",
          "base-200": "#1A1A1D",
          "base-300": "#2C2C2C",
          "base-content": "#E6E6E6",
          info: "#FFD700",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          // Global input styling for dark mode
          "input": {
            color: "#E6E6E6", // Light text on dark background
            backgroundColor: "#2C2C2C", // Make sure the background is dark enough
          },

          "--rounded-btn": "9999rem",

          ".navbar": {
            "background-color": "#0D0D0D",
          },
          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
