import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HashRouter} from 'react-router-dom';
import ContextProvider from './ContextApi.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
  </HashRouter>
)
