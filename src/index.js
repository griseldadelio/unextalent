import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_en from './utils/translate/english/global.json';
import global_es from './utils/translate/spanish/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

ReactDOM.createRoot(document.querySelector('#root')).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
