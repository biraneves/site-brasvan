import { IProps } from '../../App';
import { translations } from '../../translations';
import Container from '../Container';
import vehicles from '../../assets/images/veiculos-1.png';
import { Content } from './styles';

const Vehicles = ({ language }: IProps) => (
  <Container id="vehicles" type="light">
    <Content className="container">
      <div>
        <h2>{translations[language].secVehicles.title}</h2>
        {translations[language].secVehicles.text.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <div>
        <img src={vehicles} alt={translations[language].secVehicles.title} />
      </div>
    </Content>
  </Container>
);

export default Vehicles;
