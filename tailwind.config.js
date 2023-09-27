// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   }
//   plugins: [require("daisyui")],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {},
    extend: {
      container: {
        padding: "0px",
      },
      boxShadow: {
        custom: "0 0 10px rgba(229,229,229,.8)",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],

  daisyui: {
    themes: false,
    base: false,
  },
};

// Untuk penggunaan warna, gunakan warna yang sudah tersedia di config. Gunakan warna secondary untuk bagian heading, text, button, dan link anchor. Gunakan warna tertiary untuk efek hover pada link, dan button
