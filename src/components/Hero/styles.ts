import styled from 'styled-components';
import { colors, fonts } from '../../styles';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  padding-top: 80px;

  h1 {
    font-family: ${fonts.fontTitle};
    font-size: 54px;
    text-shadow: 1px 1px 2px #090909;
    text-align: center;
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
    text-shadow: 1px 1px 2px #090909;
    margin-top: 36px;
  }

  img {
    width: 100px;
    margin-top: 24px;
  }

  @media screen and (max-width: 1023px) {
    min-height: 600px;
  }

  @media screen and (max-width: 767px) {
    min-height: 400px;

    h1 {
      font-size: 32px;
    }

    div {
      width: 200px;
    }

    p {
      font-size: 18px;
    }
  }
`;
