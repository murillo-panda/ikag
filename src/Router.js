import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import List from './components/List'
import PersonalData from './components/PersonalData'
import Schedule from './components/Schedule'
import Categories from './components/Categories'
import WelcomeView from './components/WelcomeView'
import PhotoUpload from './components/PhotoUpload'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Iniciar Sesion"  initial/>
        <Scene key="welcomeView" component={WelcomeView} title="Menu Principal"  />
        <Scene key="personalData" component={PersonalData} title="Informacion Contacto" />
        <Scene key="schedule" component={Schedule} title="Horarios Atencion" />
        <Scene key="categories" component={Categories} title="Categorias" />
        <Scene key="uploadPhotos" component={PhotoUpload} title="Agregar imagenes" />
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
      </Scene>
    </Router>
  )
}

export default RouterComponent
