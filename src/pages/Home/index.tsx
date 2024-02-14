import { useState } from 'react';
import { detectUserLanguage } from '../../utils/language/language';

const Home = () => {
  detectUserLanguage();
  const [language, setLanguage] = useState();
  return <h1>Home</h1>;
};

export default Home;
