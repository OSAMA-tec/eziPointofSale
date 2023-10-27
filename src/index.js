import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import HttpApi from 'i18next-http-backend';
import {Provider} from "react-redux"
import { store } from './app/store';

function Loading() {
  return <h2> Loading...</h2>;
}
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'fr', 'es', 'ar', 'cn', 'de', 'hi', 'id', 'lo', 'nl', 'ps', 'pt', 'ro', 'sq', 'tr', 'ur', 'vi'],
        fallbackLng: "en",
        detection: {
            order: ['cookie', 'path', 'htmlTag', 'localStorage', 'sessionStorage', 'subdomain'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        }
    });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading />}>
  <React.StrictMode>
  <Provider store={store}>
    <App />

  </Provider>
  </React.StrictMode>
</Suspense>
  
);
