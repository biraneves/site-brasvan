import { Props } from '../../App';
import Hero from '../Hero';

const Main = ({ language }: Props) => (
  <main>
    <Hero language={language} />
  </main>
);

export default Main;
