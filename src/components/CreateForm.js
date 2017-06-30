import React, { Component } from 'react';
import { Text, View, FlatList, ListItem, Switch} from 'react-native';
import { Card, CardSection,Input, InputSingle, Button  } from '../common';
import firebase from 'firebase';

class CreateForm extends Component {
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
        <View style={styles.containerStyle}>
        <InputSingle
          style={styles.inputStyle}
          placeholder="Nombre:"
          value={this.state.title}
          onChangeText={value => this.setState({ title: value})}
        />
      </View>
      <CardSection>
      <InputSingle
      placeholder="Direccion:"
      value={this.state.description}
      onChangeText={value => this.setState({ description: value })}
      />
      </CardSection>

      <CardSection>
      <InputSingle
      placeholder="Telefono:"
      value={this.state.photo}
      onChangeText={value => this.setState({ photo: value })}
      />
      </CardSection>

      <CardSection>
      <Text> Horarios: </Text>
      </CardSection>

      <CardSection>
      <Input
      label="Lun a Vier:"
      placeholder="09:00-18:00"
      value={this.state.lunVier}
      onChangeText={value => this.setState({ lunVier: value })}
      />
      </CardSection>

      <CardSection>
      <Input
      label="Sabados:"
      placeholder="09:00-18:00"
      value={this.state.sabados}
      onChangeText={value => this.setState({ sabados: value })}
      />
      </CardSection>

      <CardSection>
      <Input
      label="Dom / Fer:"
      placeholder="09:00-18:00"
      value={this.state.domingosFeriado}
      onChangeText={value => this.setState({ domingosFeriado: value })}
      />
      </CardSection>
      <CardSection>
        <Switch
            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.falseSwitchIsOn} />
        <Text>Holis</Text>
      </CardSection>

      <CardSection>
      <Text> Foto: </Text>
      <Button>
      Subir Foto
      </Button>
      </CardSection>

      <CardSection>
      <Button>
      Agregar Establecimiento
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

export default CreateForm;
