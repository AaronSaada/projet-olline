import './App.css';
import {Routes, Route} from 'react-router-dom'
import Accueil from './Pages/Accueil/Accueil';
import Connexion from './Pages/Authentification/Connexion/Connexion';
import Inscription from './Pages/Authentification/Inscription/Inscription';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/connexion" element={<Connexion />}/>
      <Route path="/inscription" element={<Inscription />}/>
    </Routes>
  );
}

export default App;
