module.exports = {
    content: [
      "./index.html",
      "./src/components/*.{jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            primary: '#f8f8f2',   
            secondary: '#f2f4f3', 
            accent: '#f92672',    
            background: '#272822',
            subtext: '#a6e22e',   
            light: '#f2f4f3',     
          monokai: {
            background: '#272822',
            foreground: '#F8F8F2',
            comment: '#75715E',
            red: '#F92672',
            orange: '#FD971F',
            yellow: '#E6DB74',
            green: '#A6E22E',
            cyan: '#66D9EF',
            purple: '#AE81FF',
          },
        },
        backgroundImage: {
          'hero': "url('./src/assets/home-background.jpg')",
        },
      },
    },
    plugins: [],
  }
  