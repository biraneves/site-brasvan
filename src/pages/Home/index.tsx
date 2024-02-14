import { useState } from 'react';
import { detectUserLanguage } from '../../utils/language/language';

const Home = () => {
  console.log(detectUserLanguage());
  const [language, setLanguage] = useState();
  return <h1>Home</h1>;
};

export default Home;
