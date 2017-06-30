import React, { Component } from 'react'
import { Text, View, FlatList, ListItem, Switch} from 'react-native'
import { Card, CardSection,Input, InputSingle, Button  } from '../common'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';

class WelcomeView extends Component {
  state = {
    ferreteria: false,
    farmacia: false,
    supermercado: false,
    restaurant: false,
    verdureria: false,
    otros: false
  }

  onButtonPress() {
    Actions.photos();
  }

  getPhotos(){
    //console.log('CameraRoll', CameraRoll())
  }


  render() {
    return (
      <Card>
        <CardSection>
          <Text>Bienvenido Pablo Bergonzi, ¿ Que deseas hacer ?</Text>
        </CardSection>
        <CardSection>
          <Button>
            Ver Establecimientos Registrados
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={()=>{Actions.personalData()}}>
            Agregar un nuevo Establecimiento
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  inputStyle:{
    paddingLeft:0,
    flexBasis: 1
  }
}

export default WelcomeView
