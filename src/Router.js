import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import List from './components/List';
import CreateForm from './components/CreateForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Iniciar Sesion" />
      </Scene>
      <Scene key="main">
        <Scene
          onRight={() => Actions.createFrm()}
          rightTitle="Agregar"
          key="list"
          component={List}
          title="Listado de Solicitudes"
          initial
        />
      <Scene key="createFrm" component={CreateForm} title="Crear Solicitud" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
