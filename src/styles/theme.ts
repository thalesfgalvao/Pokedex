export default {
  colors: {
    successColor: '#6AE058',
    warningColor: '#E09B35',
    errorColor: '#E33F36',
    white: '#f5f5f5',
    dark: '#262626',
    grey: '#4A4A4A'
  },
  fonts: {
    family: {
      default: "'Open Sans', sans-serif",
      secundary: "'Montserrat', sans-serif"
    },
    sizes: {
      xsmall: '0.8rem',
      small: '1.2rem',
      medium: '1.6rem',
      large: '2rem',
      xlarge: '2.5rem',
      xxlarge: '2.5rem',
      huge: '3.5rem',
      xhuge: '5rem'
    },
    screens: {
      medium: '(max-width: 768px)'
    },
    spacings: {
      xsmall: '0.8rem',
      small: '1.2rem',
      medium: '1.6rem',
      large: '2rem',
      xlarge: '2.5rem',
      xxlarge: '2.5rem',
      huge: '3.5rem',
      xhuge: '5rem'
    },
    weight: {
      light: '200',
      default: '300',
      medium: '500',
      bold: '700'
    }
  }
} as const
