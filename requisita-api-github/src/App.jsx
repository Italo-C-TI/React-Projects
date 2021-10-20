import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './componentes/Login.jsx';
import Seguidores from './componentes/Seguidores.jsx';
import Seguindo from './componentes/Seguindo.jsx';
import MeuPerfil from './componentes/MeuPerfil.jsx';
import Repo from './componentes/Repositorios.jsx';
import VisitaPerfil from './componentes/VisitaPerfil';

function App() {
  return (
    <>
    <h1 className="tituloPrincipal">GitHub-perfis</h1>
    <Router>
    <div className="App">
      <Route 
        path="/"
        exact
        render={()=>(
          <Login />
          )}/>

        <Route
          path="/:perfil"
          exact
          component={MeuPerfil}
        />

       <Route
          path="/:perfil/repos"
          exact
          component={Repo}
        />

        <Route
          path="/:perfil/seguidores"
          exact
          component={Seguidores}
        />
          
        <Route
          path="/:perfil/seguindo"
          exact
          component={Seguindo}
        />
          <Route
          path="/:perfil/visita/:pessoa"
          exact
          component={VisitaPerfil}
        />
    </div>
    </Router>
    </>
  );
}

export default App;
