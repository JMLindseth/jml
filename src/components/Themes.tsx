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
  body: "#D9E2EC",
  text: "#243B53",
  toggleButtonBackground: "#363537",
  button: {
    background: "#BCCCDC",
    text: "#334E68",
    focusShadow: "#829AB1",
  },
};

export const darkTheme: Theme = {
  body: "#243B53",
  text: "#D9E2EC",
  toggleButtonBackground: "#999",
  button: {
    background: "#334E68",
    text: "#BCCCDC",
    focusShadow: "#627D98",
  },
};
