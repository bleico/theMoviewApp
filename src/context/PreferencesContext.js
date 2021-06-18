import {createContext} from 'react';

const PreferencesContext = createContext({
  theme: '',
  ToggleTheme: () => {},
});

export default PreferencesContext;
