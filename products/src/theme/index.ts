import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react/extend-theme";

export const theme = extendTheme(
  {
    colors: {
      primary: {
        100: "#ebebf7",
        200: "#c2c3e7",
        300: "#9a9ad7",
        400: "#7172c7",
        500: "#484ab7",
        600: "#38398e",
        700: "#282965",
        800: "#18193d",
        900: "#080814",
      },
      secondary: {
        100: "#e9f2f9",
        200: "#bcd8ed",
        300: "#8fbee2",
        400: "#62a4d6",
        500: "#358aca",
        600: "#296b9d",
        700: "#1d4d70",
        800: "#122e43",
        900: "#060f16",
      },
      imputBgColor: "#DEDEDE",
    },
    
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);
