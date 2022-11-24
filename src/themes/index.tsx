import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#2CE080'
    },
    secondary: {
      main: '#0365F2'
    },
    info: {
      main: '#03314B'
    }
  },
  spacing: [0, 4, 8, 16, 32, 64],
  typography: {
    fontFamily: ['Cera Pro', '"sans-serif"'].join(','),
    body1: {
      color: '#6D787E',
      fontWeight: '500',
      fontSize: '16px',
      fontStyle: 'Body 1',
      lineHeight: 2
    },
    h5: {
      color: '#03314B',
      fontWeight: 'fontWeightBold'
    },
    subtitle1: {
      color: '#03314B',
      fontWeight: '700',
      fontSize: '18px',
      fontStyle: 'Subtitle 1',
      lineHeight: 2
    },
    h6: {
      color: '#03314B',
      fontWeight: '700',
      fontSize: '14px',
      fontStyle: 'Subtitle 1',
      lineHeight: 2
    },
    h4: {
      color: '#03314B',
      fontWeight: '700',
      fontStyle: 'Heading 1'
    },
    button: {
      fontFamily: 'Inter',
      textTransform: 'none',
      fontSize: '16px',
      primary: {
        main: '#2CE080'
      },
      secondary: {
        main: '#0365F2'
      },
      neutral: {
        main: '#03314B'
      }
    },
    caption: {
      color: '#6D787E',
      fontWeight: '400',
      fontSize: '14px',
      fontStyle: 'Caption 3'
    }
  }
});

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;
