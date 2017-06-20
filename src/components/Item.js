import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import {Card, CardSection, Button} from '../common';

const Item = ({ album }) => {
  const { userImage, userFullName, title, description, dateTime, image, url } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    titleTextStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: userImage }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{userFullName}</Text>
          <Text>{dateTime}</Text>
        </View>
      </CardSection>

      <CardSection>
        <View style={thumbnailContainerStyle}>
        </View>
        <View style={headerContentStyle}>
          <Text style={titleTextStyle}>{title}</Text>
          <Text>{description}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Mas informacion
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  titleTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default Item;
