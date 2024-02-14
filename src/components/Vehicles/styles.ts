import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media screen and (max-width: 1023px) {
    display: block;

    div:nth-child(2) {
      width: 100%;
      text-align: center;
    }
  }

  @media screen and (max-width: 767px) {
    img {
      width: 80%;
    }
  }
`;
