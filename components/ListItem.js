import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import PropTypes from 'prop-types';

const avatarSize = 80;

export default class ListItem extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    uri: PropTypes.string,
    avatarUri: PropTypes.string,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    title: '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    desc: '????????????????????????????????????????????????',
    uri: 'https://picsum.photos/800/600/?random',
    avatarUri: 'https://api.adorable.io/avatars/285/abott@adorable.pngCopy to Clipboard',
    onPress: () => {},
  };
  
  render() {
    const { title, desc, uri, avatarUri, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image style={styles.image} source={{ uri }}/>
        <View style={styles.content}>
          <Image style={styles.avatarImage} source={{ uri: avatarUri }}/>
          <View style={styles.textContent}>
            <Text style={styles.text} numberOfLines={1}>{title}</Text>
            <Text style={styles.text}>{desc}</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Feather name="edit" size={32} color="#F2F2F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Feather name="share" size={32} color="#F2F2F2" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 300,
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingLeft: avatarSize + 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContent: {
    flex: 1,
  },
  text: {
    color: '#666666'
  },
  button: {
    paddingLeft: 10,
  },
  avatarImage: {
    zIndex: 1,
    position: 'absolute',
    top: -(avatarSize / 2),
    left: 20,
    height: avatarSize,
    width: avatarSize,
    borderRadius: avatarSize / 2,
  },
});
