/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-08 12:42:48
 * @LastEditTime: 2021-08-08 18:10:08
 * @LastEditors: Kenzi
 */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
