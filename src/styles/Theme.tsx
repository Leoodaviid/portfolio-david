import React, { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px: number) => `${round(px / 16)}rem`;

export const theme: DefaultTheme = {
  colors: {
    white: "#FFFFFF",
    black: "#0C0D0F",
    red: "#E03131",
    orange: "#f25320",
    brown: "#bb3913",
    yellow: "#ead41c",
    green: "#23DB42",
    teal: "#89DD13",
    cyan: "#5ed3f3",
    blue: "#25BEFF",
    indigo: "#0074c2",
    purple: "#7511f6",
    pink: "#f50057",
    gray100: "#FAFAFA",
    gray200: "#E9ECEF",
    gray300: "#DEE2E6",
    gray400: "#CED4DA",
    gray500: "#A4ACB4",
    gray600: "#64666B",
    gray700: "#424449",
    gray800: "#1D1E21",
    gray900: "#141518",
    primary: "#202124",
    secondary: "#08fdd8",
  },
  fontFamily: {
    heading: ["IBM Plex Sans", "sans-serif"].join(","),
    sans: ["Open Sans", "Arial", "Helvetica", "sans-serif"].join(","),
    mono: ["IBM Plex Mono", "serif"].join(","),
  },
  fontSize: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    base: rem(16),
    lg: rem(18),
    xl: rem(20),
    "2xl": rem(24),
    "3xl": rem(32),
    "4xl": rem(40),
    "5xl": rem(64),
  },
};

interface ThemeProps {
  children: ReactNode;
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
