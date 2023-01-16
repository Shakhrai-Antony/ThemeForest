import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string;
      defaultWhite: string;
      defaultBlack: string;
      lightGrey: string;
      darkGrey: string;
      sienna: string;
      tomato: string;
      lightSlateGray: string;
      lavender: string;
      grayishBlue: string;
      customBackgroundColor: string;
      customBackgroundBlack: string;
      headerBackground: string;
      primaryBlue: string;
      solutionBackground: string;
      hoveredButton: string;
      tertiary: string;
      secondary: string;
      helper: string;
    };
    sizes: {
      width: number;
      height: number;
      gap: number;
      borderRadius: number;
      fontSize: number;
      weight: number;
      lineHeight: number;
    };
    spaces: Array<number>;
    breakpoints: Object;
  }
}
