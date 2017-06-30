import React, { Component } from 'react'
import { Text, View, FlatList, ListItem, Switch} from 'react-native'
import { Card, CardSection,Input, InputSingle, Button  } from '../common'
import firebase from 'firebase'
import {Actions } from 'react-native-router-flux'

class PersonalData extends Component {
  state = {
    title: '',
    description:'',
    photo:'',
    photos:[],
    lunVier:'',
    sabados:'',
    domingosFeriado:'',
    falseSwitchIsOn: false
  }

  render() {
    return (
      <Card>
        <CardSection>
          <InputSingle
            placeholder="Nombre:"
            value={this.state.title}
            onChangeText={value => this.setState({ title: value})}
          />
        </CardSection>
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
          <Button onPress={()=>{Actions.schedule()}}>
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

export default PersonalData
