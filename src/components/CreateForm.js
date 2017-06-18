import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from '../common';
import firebase from 'firebase';

class CreateForm extends Component {
  state = { title: '', description:'', photo:'' };

  onButtonPress() {
    const { title, description, photo } = this.props;
    console.log(`Click Boton ${title}, ${description}, ${photo}`)

    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/solicitud`)
      .push({ title: this.state.title, description: this.state.description, photo: this.state.photo })
      .then(() => {
        console.log('Insertado correctamente')
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Titulo"
            placeholder="Ingrese su titulo aqui"
            value={this.state.title}
            onChangeText={value => this.setState({ title: value})}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Descripcion"
            placeholder="Ej: Instalacion aire acondicionado"
            value={this.state.description}
            onChangeText={value => this.setState({ description: value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Foto"
            placeholder="Ej: Instalacion aire acondicionado"
            value={this.state.photo}
            onChangeText={value => this.setState({ photo: value })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Crear Solicitud
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

export default CreateForm;
