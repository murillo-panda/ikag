import React, { Component } from 'react'
import { Text, View, FlatList, ListItem, Switch, Image} from 'react-native'
import { Card, CardSection,Input, InputSingle, Button  } from '../common'
import { Actions } from 'react-native-router-flux'
import imageUrl from '../images/camera.png'
import firebase from 'firebase'

class PhotoUpload extends Component {
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

  onButtonPress() {
  }

  getPhotos(){
    //console.log('CameraRoll', CameraRoll())
  }


  render() {
    const { imageStyle } = styles
    return (
      <Card>
        <CardSection>
          <Image
            style={imageStyle}
            source={imageUrl}
          />
        </CardSection>
        <CardSection>
          <Button onPress={()=>{Actions.welcomeView()}}>
            Guardar Cambios
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default PhotoUpload
