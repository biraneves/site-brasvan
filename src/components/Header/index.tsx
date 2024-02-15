import { IProps } from '../../App';
import { HeaderContainer, LinkContainer, LinksContainer } from './styles';
import logo from '../../assets/images/brasvan-logo-150.png';
import { translations } from '../../translations';
import en from '../../assets/images/languages/en.png';
import es from '../../assets/images/languages/es.png';
import pt from '../../assets/images/languages/pt.png';
import { useEffect, useRef, useState } from 'react';

type LanguageImages = {
  [key: string]: string;
};

const Header = ({ language, alterLanguage }: IProps) => {
  const languageImages: LanguageImages = {
    en: en,
    es: es,
    pt: pt,
  };

  const [height, setHeight] = useState(0);
  const elementRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.offsetHeight);
    }
  }, []);

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -height;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <HeaderContainer ref={elementRef}>
      <div className="container">
        <img src={logo} alt="Brasvan Viagens e Turismo" />
        <nav>
          <LinksContainer>
            <li>
              <LinkContainer to="#hero" scroll={(el) => scrollWithOffset(el)}>
                {translations[language].header.hdrHome}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer
                to="#about-us"
                scroll={(el) => scrollWithOffset(el)}
              >
                {translations[language].header.hdrAboutUs}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer
                to="#services"
                scroll={(el) => scrollWithOffset(el)}
              >
                {translations[language].header.hdrServices}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer
                to="#vehicles"
                scroll={(el) => scrollWithOffset(el)}
              >
                {translations[language].header.hdrVehicles}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer
                to="#customers"
                scroll={(el) => scrollWithOffset(el)}
              >
                {translations[language].header.hdrCustomers}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer
                to="#contact"
                scroll={(el) => scrollWithOffset(el)}
              >
                {translations[language].header.hdrContact}
              </LinkContainer>
            </li>
            {translations[language].header.hdrLanguages.map((lang) => (
              <li key={lang.language}>
                <img
                  src={languageImages[lang.language]}
                  alt={lang.languageName}
                  onClick={() => {
                    if (alterLanguage) alterLanguage(lang.language);
                  }}
                />
              </li>
            ))}
          </LinksContainer>
        </nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
