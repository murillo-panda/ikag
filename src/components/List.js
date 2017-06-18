
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './Item'
import firebase from 'firebase';

class List extends Component {
  state = { albums: [], payload:{} };

  componentWillMount() {
    const { currentUser } = firebase.auth();

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response =>
        {
          this.setState({ albums: response.data })
          console.log('Taylor Swift ', this.state.albums)
        }
    );

    firebase.database().ref(`/users/${currentUser.uid}/solicitud`)
        .on('value', snapshot => {
            this.setState({payload: snapshot.val()});
            console.log('payload firebase', this.state.payload)
        });

  }

  renderAlbums() {
    return this.state.albums.map(album =>
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
