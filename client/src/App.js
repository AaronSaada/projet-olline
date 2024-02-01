import './App.css';
import {Routes, Route} from 'react-router-dom'
import Accueil from './Pages/Accueil/Accueil';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      {/*<Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
}

export default App;
