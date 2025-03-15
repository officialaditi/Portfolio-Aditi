/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bigShoulders: ['Big Shoulders', 'sans-serif'],
        bigShouldersInline: ['Big Shoulders Inline', 'sans-serif'],
        iansui: ['Iansui', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
  },
  plugins: [],
}
}
