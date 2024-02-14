import { IProps } from '../../App';
import { translations } from '../../translations';
import Container from '../Container';
import { Content, ContentBottom, ContentTop } from './styles';

const Services = ({ language }: IProps) => (
  <Container type="dark">
    <Content className="container">
      <ContentTop>
        <h2>{translations[language].secServices.subEvents.title}</h2>
        {translations[language].secServices.subEvents.text.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </ContentTop>
      <ContentBottom>
        <div>
          <h2>{translations[language].secServices.subReceptive.title}</h2>
          {translations[language].secServices.subReceptive.text.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <div>
          <h2>{translations[language].secServices.subCityTours.title}</h2>
          {translations[language].secServices.subCityTours.text.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <h2>{translations[language].secServices.subHosting.title}</h2>
          {translations[language].secServices.subHosting.text.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </ContentBottom>
    </Content>
  </Container>
);

export default Services;
