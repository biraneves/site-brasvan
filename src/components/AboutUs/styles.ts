import styled from 'styled-components';

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  ul {
    padding-left: 24px;
    line-height: 24px;
  }

  @media screen and (max-width: 767px) {
    display: block;
  }
`;
