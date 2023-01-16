import { DefaultTheme } from 'styled-components';

const baseTheme: DefaultTheme = {
  colors: {
    dark: '#1c1c1c',
    defaultWhite: '#fff',
    defaultBlack: '#000',
    lightGrey: '#9497A1',
    darkGrey: '#696969',
    sienna: '#A0522D',
    tomato: '#FF6347',
    lightSlateGray: '#778899',
    lavender: '#E6E6FA',
    grayishBlue: '#282c34',
    customBackgroundColor: '#6c7a89cc',
    customBackgroundBlack: '#00000099',
    headerBackground: '#F1F6FA',
    primaryBlue: '#185CFF',
    solutionBackground: '#F1F6FA',
    hoveredButton: '#467DFF',
    tertiary: '#F0F9FF',
    secondary: '#002B4E',
    helper: '#C9DCEC',
  },
  sizes: {
    width:
      4 ||
      13 ||
      25 ||
      32 ||
      42 ||
      67 ||
      70 ||
      80 ||
      100 ||
      110 ||
      125 ||
      141 ||
      150 ||
      168 ||
      185 ||
      215 ||
      255 ||
      285 ||
      320 ||
      328 ||
      350 ||
      375 ||
      400 ||
      445 ||
      540 ||
      700 ||
      800 ||
      900,
    height:
      7 ||
      25 ||
      42 ||
      44 ||
      46 ||
      50 ||
      54 ||
      60 ||
      80 ||
      112 ||
      120 ||
      132 ||
      126 ||
      197 ||
      328 ||
      371 ||
      525 ||
      590 ||
      740,
    gap: 20 || 40,
    borderRadius: 6 || 10 || 15,
    fontSize: 14 || 15 || 16 || 20 || 25 || 30 || 38 || 46 || 50 || 57,
    weight: 400 || 500 || 700 || 800,
    lineHeight: 24 || 28 || 30 || 33 || 40 || 56 || 60 || 65 || 70 || 112,
  },
  spaces: [
    0, 5, 10, 15, 20, 30, 35, 40, 50, 70, 80, 90, 95, 100, 105, 110, 115, 120,
    125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 220,
    405,
  ],
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 8,
      slidesPerGroup: 1,
    },
    800: {
      slidesPerView: 1,
      spaceBetween: 6,
      slidesPerGroup: 1,
    },
    325: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
};

export default baseTheme;
