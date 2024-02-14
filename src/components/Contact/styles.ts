import styled from 'styled-components';
import { colors } from '../../styles';

export const ContactSection = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export const ContactData = styled.div`
  max-width: 400px;
  text-align: center;

  span {
    font-size: 42px;
    margin-bottom: 16px;
  }
`;

export const ContactForm = styled.form`
  max-width: 580px;
  width: 100%;

  label {
    display: block;
    margin-bottom: 4px;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 6px;
    padding: 12px;
    font-size: 16px;
    margin-bottom: 20px;
  }

  textarea {
    height: 144px;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 6px;
    padding: 6px 12px;
    font-size: 16px;
    width: 100px;
    height: 42px;
    transition: all ease 0.3s;

    &:hover {
      background-color: ${colors.defaulText};
      color: #fff;
      transition: all ease 0.3s;
    }
  }
`;
