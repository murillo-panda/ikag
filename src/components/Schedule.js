import React, { Component } from 'react';
import { Text, View, FlatList, ListItem, Switch} from 'react-native';
import { Card, CardSection,Input, InputSingle, Button  } from '../common';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

class Schedule extends Component {
  state = {
    title: '',
    description:'',
    photo:'',
    photos:[],
    lunVier:'',
    sabados:'',
    domingosFeriado:'',
    falseSwitchIsOn: false
  };

  onButtonPress() {
    const { title, description, photo } = this.props;

    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/solicitud`)
    .push({ title: this.state.title, description: this.state.description, photo: this.state.photo })
    .then(() => {
      console.log('Insertado correctamente')
    });
  }

  getPhotos(){
    //console.log('CameraRoll', CameraRoll())
  }


  render() {
    return (
      <Card>

        <CardSection>
          <Text> Lunes a Viernes: </Text>
        </CardSection>
        <CardSection>
          <Input
            label="Inicio:"
            placeholder="09:00-18:00"
            value={this.state.sabados}
            onChangeText={value => this.setState({ sabados: value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Fin:"
            placeholder="09:00-18:00"
            value={this.state.domingosFeriado}
            onChangeText={value => this.setState({ domingosFeriado: value })}
          />
        </CardSection>
        <CardSection>
          <Text> Sabados: </Text>
        </CardSection>
        <CardSection>
          <Input
            label="Inicio:"
            placeholder="09:00-18:00"
            value={this.state.sabados}
            onChangeText={value => this.setState({ sabados: value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Fin:"
            placeholder="09:00-18:00"
            value={this.state.domingosFeriado}
            onChangeText={value => this.setState({ domingosFeriado: value })}
          />
        </CardSection>
        <CardSection>
          <Text> Domingos y Feriados: </Text>
        </CardSection>
        <CardSection>
          <Input
            label="Inicio:"
            placeholder="09:00-18:00"
            value={this.state.sabados}
            onChangeText={value => this.setState({ sabados: value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Fin:"
            placeholder="09:00-18:00"
            value={this.state.domingosFeriado}
            onChangeText={value => this.setState({ domingosFeriado: value })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={()=>{Actions.categories()}}>
            Siguiente
          </Button>
        </CardSection>
      </Card>
    );
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
};

export default Schedule;
