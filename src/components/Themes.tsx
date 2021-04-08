export interface Theme {
  body: string;
  text: string;
  toggleButtonBackground: string;
  button: {
    background: string;
    text: string;
    focusShadow: string;
  }
}

export const lightTheme: Theme = {
  body: '#F0F4F8',
  text: '#102A43',
  toggleButtonBackground: '#363537',
  button: {
    background: '#D9E2EC',
    text: '#243B53',
    focusShadow: '#829AB1',
  }
}

export const darkTheme: Theme = {
  body: '#102A43',
  text: '#F0F4F8',
  toggleButtonBackground: '#999',
  button: {
    background: '#243B53',
    text: '#D9E2EC',
    focusShadow: '#627D98',
  }
}
