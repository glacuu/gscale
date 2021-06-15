const colors = require("tailwindcss/colors");
module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./twSafeList.txt",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                maxsm: { max: "639px" },
                maxlg: { max: "1023px" },
            },
            colors: {
                gray: colors.trueGray,
                indigo: colors.indigo,
                amber: colors.amber,
                orange: colors.orange,
                gscale: {
                    dark: {
                        background: {
                            ternary: "#18191B",
                            ternary500: "#1d1e20",
                            secondary: "#252527",
                            500: "#373739",
                            primary: "#2F3033",
                        },
                        text: {
                            ternary: "#8A8C8F",
                            secondary: "#C9CBCF",
                            primary: "#F4F4F4",
                        },
                    },
                },

                genshin: {
                    element: {
                        anemo: "#80FFD7",
                        pyro: "#FF9999",
                        electro: "#FFACFF",
                        geo: "#FFE667",
                        cryo: "#99FFFF",
                        hydro: "#80C0FF",
                    },

                    dark: {
                        element: {
                            anemo: "#2FD09A",
                            pyro: "#FF5C5C",
                            electro: "#E368E3",
                            geo: "#edad54",
                            cryo: "#57cbcb",
                            hydro: "#3D9EFF",
                        },
                    },

                    rarity: {
                        1: "#757575",
                        2: "#6FD1A2",
                        3: "#5AA6E0",
                        4: "#B07DE6",
                        5: "#F08E3A",
                    },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/line-clamp")],
};
