import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

export default class BubbleImage extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Image
          style={[styles.image, this.props.imageStyle]}
          source={{uri: this.props.currentMessage.image}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 8,
    margin: 3,
    resizeMode: 'cover',
  },
});

BubbleImage.defaultProps = {
  containerStyle: {},
  imageStyle: {},
  currentMessage: {
    image: null,
  },
};
