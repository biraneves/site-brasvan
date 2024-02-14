import styled from 'styled-components';
import imageHero from '../../assets/images/fundo-cabecalho-brasvan.png';
import { colors, fonts } from '../../styles';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${imageHero});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 800px;
  padding-top: 80px;

  h1 {
    font-family: ${fonts.fontTitle};
    font-size: 54px;
    color: ${colors.white};
    text-shadow: 1px 1px 2px #090909;
  }

  div {
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: solid 1px ${colors.white};
    width: 400px;
  }

  p {
    font-size: 24px;
    line-height: 24px;
    color: ${colors.white};
    text-shadow: 1px 1px 2px #090909;
    margin-top: 36px;
  }

  img {
    width: 100px;
    margin-top: 24px;
  }
`;
