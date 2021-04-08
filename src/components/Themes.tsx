export interface Theme {
  body: string;
  text: string;
  toggleButtonBackground: string;
}

export const lightTheme: Theme = {
  body: '#F0F4F8',
  text: '#102A43',
  toggleButtonBackground: '#363537',
}

export const darkTheme: Theme = {
  body: '#102A43',
  text: '#F0F4F8',
  toggleButtonBackground: '#999',
}
