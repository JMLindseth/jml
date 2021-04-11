import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    toggleButtonBackground: string;
    button: {
      background: string;
      text: string;
      focusShadow: string;
    }
  }
}
