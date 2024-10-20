module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This will cover all files in src, including components and pages
    './public/index.html', // Include the main HTML file as well
  ],
  theme: {
    extend: {
      colors: {
        primary: '#91B3FA',
        'Gray-Text': '#6B7280',
        secondary: '#F3A92A',
        tertiary: '#91B3FA',
        success: '#13DEB9',
        text: { primary: '#000', secondary: '#F3A92A' },
        action: {
          disabledBackground: 'rgba(73,82,88,0.12)',
          hoverOpacity: 0.02,
          hover: '#580cd2',
        },
      },
      fontFamily: { montserrat: ['Montserrat', 'Arial', 'sans-serif'] },
      fontSize: {
        '2xl': '1.875rem',
        '3xl': '1.5rem',
        '4xl': '1.3125rem',
        '5xl': '1.125rem',
        '6xl': '1rem',
      },
      lineHeight: {
        '2xl': '2.25rem',
        '3xl': '1.75rem',
        '4xl': '1.6rem',
        '5xl': '1.6rem',
        '6xl': '1.2rem',
      },
      fontWeight: { normal: 400, medium: 500, semibold: 600 },
    },
  },
  plugins: [],
};
