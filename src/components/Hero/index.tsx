import { IProps } from '../../App';
import { translations } from '../../translations';
import { HeroContainer } from './styles';
import logoTourism from '../../assets/images/selo-turismo-responsavel.png';
import Container from '../Container';
import backgroundHero from '../../assets/images/fundo-cabecalho-brasvan.png';

const Hero = ({ language }: IProps) => (
  <Container type="photo" photo={backgroundHero}>
    <HeroContainer>
      <h1>{translations[language].hero.hroTitle}</h1>
      <div></div>
      <p>{translations[language].hero.hroSubtitle}</p>
      <img src={logoTourism} alt={translations[language].hero.hroAltBadge} />
    </HeroContainer>
  </Container>
);

export default Hero;
