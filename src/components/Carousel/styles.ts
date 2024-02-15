import styled from 'styled-components';
import { colors } from '../../styles';

export const CarouselContainer = styled.div`
  margin: 60px auto;
  width: 90%;

  .slick-arrow {
    background-color: ${colors.defaulText};
    border-radius: 50%;
  }

  @media screen and (max-width: 767px) {
    margin: 20px auto;
  }
`;

export const SlideEnvelope = styled.div`
  width: 100%;
  text-align: center;
  display: flex !important;
  justify-content: center;
`;
