import { IProps } from '../../App';
import { translations } from '../../translations';
import Container from '../Container';
import { Content } from './styles';

const Footer = ({ language }: IProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container id="footer" type="footer">
        <Content className="container">
          {translations[language].footer.text.map((text, index) => (
            <p key={text}>
              {index === 0
                ? text.replace(
                    '<span id="currentYear"></span>',
                    currentYear.toString(),
                  )
                : 'Developed and powered by CZN Tech Solutions.'}
            </p>
          ))}
        </Content>
      </Container>
    </footer>
  );
};

export default Footer;
