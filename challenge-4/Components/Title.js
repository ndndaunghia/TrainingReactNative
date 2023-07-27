import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export class Title extends Component {
  render() {
    return (
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Wordle</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleWrapper: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
});

export default Title;
