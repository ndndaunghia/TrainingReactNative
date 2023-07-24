import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
export class Time extends Component {
  render() {
    const { time } = this.props;
    return (
      <View style={styles.item}>
        <Text>{time}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: '#802384',
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default Time;
