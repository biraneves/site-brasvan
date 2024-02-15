import { IProps } from '../../App';
import { translations } from '../../translations';
import { partners } from '../../utils/partners/partners';
import Carousel from '../Carousel';
import { CustomerContainer } from './styles';

const Customers = ({ language }: IProps) => (
  <CustomerContainer id="customers" type="light">
    <div className="container">
      <h2>{translations[language].secCustomers.title}</h2>
      <Carousel partners={partners} />
    </div>
  </CustomerContainer>
);

export default Customers;
