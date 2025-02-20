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
