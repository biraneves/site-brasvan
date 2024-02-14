import { Props } from '../../App';
import { translations } from '../../translations';
import { HeroContainer } from './styles';
import logoTourism from '../../assets/images/selo-turismo-responsavel.png';

const Hero = ({ language }: Props) => (
  <HeroContainer>
    <h1>{translations[language].hero.hroTitle}</h1>
    <div></div>
    <p>{translations[language].hero.hroSubtitle}</p>
    <img src={logoTourism} alt={translations[language].hero.hroAltBadge} />
  </HeroContainer>
);

export default Hero;
