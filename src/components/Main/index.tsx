import { IProps } from '../../App';
import Hero from '../Hero';

const Main = ({ language }: IProps) => (
  <main>
    <Hero language={language} />
  </main>
);

export default Main;
