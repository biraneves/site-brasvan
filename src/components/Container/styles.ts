import styled from 'styled-components';
import { colors } from '../../styles';
import { Props } from '.';

export const LightContainer = styled.div`
  background-color: ${colors.white};
  padding: 80px 0;

  h2 {
    font-size: 32px;
    color: ${colors.darkTitle};
  }
`;

export const DarkContainer = styled.div`
  background-image: linear-gradient(45deg, #14599a 0%, #061a40 100%);
  padding: 80px 0;
  color: ${colors.white};

  h2 {
    font-size: 32px;
    color: ${colors.white};
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
  }
`;
