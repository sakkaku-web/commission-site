import i18next from 'i18next';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import common_en from './i18n/en/common.json';
import common_de from './i18n/de/common.json';
import common_jp from './i18n/jp/common.json';

import App from './app/app';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'common',
  resources: {
    en: { common: common_en },
    de: { common: common_de },
    jp: { common: common_jp },
  },
});

ReactDOM.render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>,
  document.getElementById('root')
);
