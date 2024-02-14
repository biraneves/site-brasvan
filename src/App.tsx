import { BrowserRouter } from 'react-router-dom';
import { GlobalCSS } from './styles';
import SiteRoutes from './routes';

export interface IProps {
  language: string;
  alterLanguage?: (language: string) => void;
}

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <SiteRoutes />
    </BrowserRouter>
  );
}

export default App;
