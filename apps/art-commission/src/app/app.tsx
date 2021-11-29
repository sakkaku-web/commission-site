import { useTranslation } from "react-i18next";

export function App() {
  const { t } = useTranslation();

  return (
    <div id="wrapper">
      <div>
        <img
          src="https://placekitten.com/300/200"
          alt="profile"
          className="max-w-xs mx-auto"
        />
        <div className="text-center">
          <h1 className="uppercase">Kumi</h1>
          <p>{t('landing.description')}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
