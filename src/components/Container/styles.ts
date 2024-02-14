import styled from 'styled-components';
import { colors } from '../../styles';
import { Props } from '.';

export const LightContainer = styled.div<Omit<Props, 'type' | 'children'>>`
  background-color: ${colors.white};
  padding: 80px 0;

  h2 {
    font-size: 32px;
    color: ${colors.darkTitle};
    padding-bottom: 20px;
  }

  p {
    padding-bottom: 16px;
    line-height: 26px;
  }

  @media screen and (max-width: 1023px) {
    padding: 32px 0;
  }

  @media screen and (max-width: 767px) {
    h2 {
      font-size: 24px;
    }
  }
`;

export const DarkContainer = styled.div<Omit<Props, 'type' | 'children'>>`
  background-image: linear-gradient(45deg, #14599a 0%, #061a40 100%);
  padding: 80px 0;
  color: ${colors.white};

  h2 {
    font-size: 32px;
    color: ${colors.white};
    padding-bottom: 20px;
  }

  p {
    padding-bottom: 16px;
    line-height: 26px;
  }

  @media screen and (max-width: 1023px) {
    padding: 32px 0;
  }

  @media screen and (max-width: 767px) {
    h2 {
      font-size: 24px;
    }
  }
`;

export const FooterContainer = styled.div`
  background-image: linear-gradient(45deg, #14599a 0%, #061a40 100%);
  padding: 24px 0;
  color: ${colors.white};

  p {
    font-size: 11px;
  }
`;

export const PhotoContainer = styled.div<Omit<Props, 'type' | 'children'>>`
  background-image: url(${(props) => props.photo});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 80px 0;
  color: ${colors.white};

  h2 {
    font-size: 32px;
    color: ${colors.white};
    padding-bottom: 20px;
  }

  p {
    padding-bottom: 16px;
    line-height: 26px;
  }

  @media screen and (max-width: 767px) {
    h2 {
      font-size: 24px;
    }
  }
`;
