export interface Theme {
  body: string;
  text: string;
  toggleButtonBackground: string;
  button: {
    background: string;
    text: string;
    focusShadow: string;
  };
}

export const lightTheme: Theme = {
  body: "#FAFAFA",
  text: "#212121",
  toggleButtonBackground: "#363537",
  button: {
    background: "#F5F5F5",
    text: "#424242",
    focusShadow: "#829AB1",
  },
};

export const darkTheme: Theme = {
  body: "#212121",
  text: "#FAFAFA",
  toggleButtonBackground: "#999",
  button: {
    background: "#424242",
    text: "#F5F5F5",
    focusShadow: "#627D98",
  },
};
