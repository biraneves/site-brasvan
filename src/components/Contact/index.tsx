import { IProps } from '../../App';
import Container from '../Container';
import backgroundPhoto from '../../assets/images/fundo-contato.png';
import { translations } from '../../translations';
import { ContactData, ContactForm, ContactSection } from './styles';

const Contact = ({ language }: IProps) => (
  <Container type="photo" photo={backgroundPhoto}>
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
      <ContactForm>
        {translations[language].secContact.subForm.fields.map((field) => (
          <div key={field.label}>
            <label htmlFor={field.label}>{field.label}</label>
            {field.label !== 'Mensagem' ? (
              <input name={field.label} placeholder={field.placeholder} />
            ) : (
              <textarea
                name={field.label}
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

export default Contact;
