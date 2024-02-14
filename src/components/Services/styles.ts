import styled from 'styled-components';

export const Content = styled.div``;

export const ContentTop = styled.div``;

export const ContentBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 32px;

  @media screen and (max-width: 767px) {
    display: block;

    h2 {
      margin-top: 24px;
    }
  }
`;
