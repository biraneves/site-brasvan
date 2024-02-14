import { IProps } from '../../App';
import { HeaderContainer, LinkContainer, LinksContainer } from './styles';
import logo from '../../assets/images/brasvan-logo-150.png';
import { translations } from '../../translations';
import en from '../../assets/images/languages/en.png';
import es from '../../assets/images/languages/es.png';
import pt from '../../assets/images/languages/pt.png';

type LanguageImages = {
  [key: string]: string;
};

const Header = ({ language, alterLanguage }: IProps) => {
  const languageImages: LanguageImages = {
    en: en,
    es: es,
    pt: pt,
  };

  return (
    <HeaderContainer className="glass">
      <div className="container">
        <img src={logo} alt="Brasvan Viagens e Turismo" />
        <nav>
          <LinksContainer>
            <li>
              <LinkContainer to="#hero">
                {translations[language].header.hdrHome}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="#about-us">
                {translations[language].header.hdrAboutUs}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="#services">
                {translations[language].header.hdrServices}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="#vehicles">
                {translations[language].header.hdrVehicles}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="#customers">
                {translations[language].header.hdrCustomers}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="#contact">
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
