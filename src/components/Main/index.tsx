import { IProps } from '../../App';
import AboutUs from '../AboutUs';
import Contact from '../Contact';
import Customers from '../Customers';
import Hero from '../Hero';
import Services from '../Services';
import Vehicles from '../Vehicles';

const Main = ({ language }: IProps) => (
  <main>
    <Hero language={language} />
    <AboutUs language={language} />
    <Services language={language} />
    <Vehicles language={language} />
    <Customers language={language} />
    <Contact language={language} />
  </main>
);

export default Main;
