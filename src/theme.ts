import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({ sm: '20em', md: '52em', lg: '64em', xl: '80em' })

const theme = extendTheme(
  { 
    breakpoints,
    styles: {
      global: {
        button: {
          _hover: {
            bg: '#f0f0f3',
            color: 'black'
          },
          _focus: {
            boxShadow: 'none !important',
          }
        },
        div: {
          _focus: {
            boxShadow: 'none !important',
          }
        },
        a: {
          _focus: {
            boxShadow: 'none !important',
          }
        }
      },
    },
    textStyles: { 
      primary: {
          fontFamily: '"Raleway","Arial","sans-serif"'
      },
      secondary: {
          fontFamily: '"Lato","Arial","sans-serif"'
      },
    },
    colors: {
      primary: "rgb(0, 75, 224)",
      gray: "#f0f0f3"
    }
  },
)

export default theme
