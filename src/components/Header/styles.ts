import styled from 'styled-components';
import { colors } from '../../styles';

export const LinksContainer = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  align-items: center;
`;

export const LinkContainer = styled.a`
  padding: 12px 12px 4px 12px;
  border-bottom: solid 3px transparent;
  text-decoration: none;
  color: ${colors.defaulText};
  transition: all ease 0.3s;

  &:hover {
    color: ${colors.darkTitle};
    border-bottom-color: ${colors.darkTitle};
    transition: all ease 0.3s;
  }
`;

export const HeaderContainer = styled.header`
  padding: 16px 0;
  background-color: ${colors.white};
  box-shadow: 0 0 10px 0 ${colors.defaulText};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
