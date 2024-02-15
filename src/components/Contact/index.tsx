import React from 'react';
import { IProps } from '../../App';
import Container from '../Container';
import backgroundPhoto from '../../assets/images/fundo-contato.png';
import { translations } from '../../translations';
import { ContactData, ContactForm, ContactSection } from './styles';
import emailjs from '@emailjs/browser';

const Contact = ({ language }: IProps) => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_j7akgya',
      'template_om61sf3',
      e.target as HTMLFormElement,
      'xP6Qg24k8NPoMy1Ac',
    );

    (document.getElementById('name')! as HTMLInputElement).value = '';
    (document.getElementById('email')! as HTMLInputElement).value = '';
    (document.getElementById('phone')! as HTMLInputElement).value = '';
    (document.getElementById('message')! as HTMLTextAreaElement).value = '';

    let info: string;

    switch (language) {
      case 'pt':
        info = 'Sua mensagem foi enviada.';
        break;
      case 'es':
        info = 'Su mensaje ha sido enviado.';
        break;
      default:
        info = 'Your message was sent.';
        break;
    }

    alert(info);
  };

  return (
    <Container id="contact" type="photo" photo={backgroundPhoto}>
      <ContactSection className="container">
        <ContactData>
          <span className="fa-solid fa-phone"></span>
          <h2>{translations[language].secContact.subCallUs.title}</h2>
          {translations[language].secContact.subCallUs.text.map((text) => (
            <p key={text}>{text}</p>
          ))}
          {translations[language].secContact.subCallUs.phones.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </ContactData>
        <ContactForm onSubmit={sendEmail}>
          {translations[language].secContact.subForm.fields.map((field) => (
            <div key={field.label}>
              <label htmlFor={field.label}>{field.label}</label>
              {field.field !== 'message' ? (
                <input
                  name={field.field}
                  id={field.field}
                  placeholder={field.placeholder}
                />
              ) : (
                <textarea
                  name={field.field}
                  id={field.field}
                  placeholder={field.placeholder}
                ></textarea>
              )}
            </div>
          ))}
          <button type="submit">
            {translations[language].secContact.subForm.button}
          </button>
        </ContactForm>
      </ContactSection>
    </Container>
  );
};

export default Contact;
