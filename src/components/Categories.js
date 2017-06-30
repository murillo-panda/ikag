import React, { Component } from 'react'
import { Text, View, FlatList, ListItem, Switch} from 'react-native'
import { Card, CardSection,Input, InputSingle, Button  } from '../common'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';

class Categories extends Component {
  state = {
    ferreteria: false,
    farmacia: false,
    supermercado: false,
    restaurant: false,
    verdureria: false,
    otros: false
  }

  onButtonPress() {
    Actions.uploadPhotos();
  }

  getPhotos(){
    //console.log('CameraRoll', CameraRoll())
  }


  render() {
    return (
      <Card>
      <CardSection>
        <Text>¿ A que tipo de categoria pertenece el establecimiento ?</Text>
      </CardSection>
        <CardSection>
          <Switch
              onValueChange={(value) => this.setState({ferreteria: value})}
              style={{marginBottom: 10}}
              value={this.state.ferreteria} />
          <Text>Ferreteria</Text>
        </CardSection>
        <CardSection>
          <Switch
              onValueChange={(value) => this.setState({farmacia: value})}
              style={{marginBottom: 10}}
              value={this.state.farmacia} />
          <Text>Farmacia</Text>
        </CardSection>
        <CardSection>
          <Switch
              onValueChange={(value) => this.setState({supermercado: value})}
              style={{marginBottom: 10}}
              value={this.state.supermercado} />
          <Text>Supermercado</Text>
        </CardSection>
        <CardSection>
          <Switch
              onValueChange={(value) => this.setState({restaurant: value})}
              style={{marginBottom: 10}}
              value={this.state.restaurant} />
          <Text>Restaurant</Text>
        </CardSection>
        <CardSection>
          <Switch
              onValueChange={(value) => this.setState({verdureria: value})}
              style={{marginBottom: 10}}
              value={this.state.verdureria} />
          <Text>Verdureria</Text>
        </CardSection>
        <CardSection>
          <Switch
              onValueChange={(value) => this.setState({otros: value})}
              style={{marginBottom: 10}}
              value={this.state.otros} />
          <Text>Otros</Text>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Siguiente
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

export default Categories
