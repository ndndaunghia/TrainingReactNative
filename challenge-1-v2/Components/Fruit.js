import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';
import Feather from 'react-native-vector-icons/Feather';

export default class Fruit extends Component {
  handleRemoveItem = () => {
    this.props.removeItem(this.props.index);
  };
  render() {
    const { name, imageUrl} = this.props;
    // console.log('name', name)
    return (
      <View style={styles.fruitContainer}>
        <View style={styles.fruitItem}>
          <Image source={{ uri: imageUrl }} style={{ width: 30, height: 30 }} />
          <Text style={styles.fruitContent}>{name}</Text>
        </View>
        <TouchableOpacity onPress={this.handleRemoveItem}>
          <Feather name="trash" size={25} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fruitContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 10,
    marginBottom: 20,
  },

  fruitItem: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },

  fruitContent: {
    fontSize: 20,
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
