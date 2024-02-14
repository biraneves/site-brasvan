import { Props } from '../../App';
import { HeaderContainer, LinkContainer, LinksContainer } from './styles';
import logo from '../../assets/images/brasvan-logo-150.png';
import { translations } from '../../translations';
import en from '../../assets/images/languages/en.png';
import es from '../../assets/images/languages/es.png';
import pt from '../../assets/images/languages/pt.png';

type LanguageImages = {
  [key: string]: string;
};

const Header = ({ language, alterLanguage }: Props) => {
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
              <LinkContainer href="">
                {translations[language].header.hdrHome}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer href="">
                {translations[language].header.hdrAboutUs}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer href="">
                {translations[language].header.hdrServices}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer href="">
                {translations[language].header.hdrVehicles}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer href="">
                {translations[language].header.hdrCustomers}
              </LinkContainer>
            </li>
            <li>
              <LinkContainer href="">
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
