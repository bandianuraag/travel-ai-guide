module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 30px rgba(14, 165, 233, 0.28)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(96,165,250,0.3), transparent 40%)'
      }
    }
  },
  plugins: []
};
