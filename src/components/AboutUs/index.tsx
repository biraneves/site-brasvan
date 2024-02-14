import { useRef } from 'react';
import { IProps } from '../../App';
import { translations } from '../../translations';
import Container from '../Container';
import { SectionContent } from './styles';

const AboutUs = ({ language }: IProps) => {
  return (
    <Container id="about-us" type="light">
      <SectionContent className="container">
        <div>
          <h2>{translations[language].secAboutUs.subCompany.title}</h2>
          {translations[language].secAboutUs.subCompany.text.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <div>
          <h2>{translations[language].secAboutUs.subService.title}</h2>
          {translations[language].secAboutUs.subService.text.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <ul>
            {translations[language].secAboutUs.subService.list.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
      </SectionContent>
    </Container>
  );
};

export default AboutUs;
