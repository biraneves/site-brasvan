import { useState } from 'react';
import { detectUserLanguage } from '../../utils/language/language';
import Header from '../../components/Header';
import Main from '../../components/Main';

const Home = () => {
  const [language, setLanguage] = useState(detectUserLanguage());

  return (
    <>
      <Header language={language} alterLanguage={setLanguage} />
      <Main language={language} />
    </>
  );
};

export default Home;
