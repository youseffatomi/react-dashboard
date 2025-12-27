import { createTheme } from "flowbite-react";

const Theme = createTheme({
  card: {
    root: {
      base: "border-none shadow-none",
    },
  },
  button: {
    color: {
      default: "bg-primary",
      secendary: "bg-secendary",
      third: "bg-third",
    },
    outlineColor: {
      default: "border-primary hover:bg-primary border-2 transition-all",
      secendary: "border-secendary hover:bg-secendar border-2 transition-all",
      third: "border-third hover:bg-third border-2 transition-all",
    },
  },
});

export default Theme;
