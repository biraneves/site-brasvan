import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: block;
    text-align: center;

    p {
      margin-bottom: 4px;
    }
  }
`;
