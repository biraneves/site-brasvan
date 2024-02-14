import { BrowserRouter } from 'react-router-dom';
import { GlobalCSS } from './styles';
import SiteRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <SiteRoutes />
    </BrowserRouter>
  );
}

export default App;
