
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './Item';
import firebase from 'firebase';
import _ from 'lodash';

class List extends Component {
  state = { albums: [], payload:[] };

  componentWillMount() {
    const { currentUser } = firebase.auth();

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response =>
      {
        this.setState({ albums: response.data })
      }
    );

    firebase.database().ref(`/users/${currentUser.uid}/solicitud`)
    .on('value', snapshot => {
      let result = snapshot.val()
      //console.log(result);
      /*[ {{attr1:1,attr2:2},rodo123},
        {{attr1:1,attr2:2},rodo123},
        {{attr1:1,attr2:2},rodo123}
      ]*/
      let employees = _.map(result, (val, uid) => {
        return { ...val, uid };
      });
      console.log('employees: ', employees);
    });

    let temp =
    [
      {
        "userImage": 'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-1/p80x80/18268192_10155282736648249_5229879996898257126_n.jpg?oh=4ed847cf97ba91c2c42f7653b2c8217b&oe=59DD9391',
        "userFullName": 'Rodolfo Ortiz',
        "dateTime": "16 de junio a las 11:04",
        "title": "Instalacion de Aire Acondicionado",
        "description": "Necesito instalar aire acondicionado",
        "image": "https://images-na.ssl-images-amazon.com/images/I/6142Sn71ZOL._SL1000_.jpg",
        "url": "https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886"
      }
    ]

    this.setState({payload: temp});
  }

  renderAlbums() {
    return this.state.payload.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
      {this.renderAlbums()}
      </ScrollView>
    );
  }
}
export default List;
