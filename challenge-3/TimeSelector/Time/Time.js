import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
export class Time extends Component {
  render() {
    const { time, status } = this.props;
    return (
      <TouchableOpacity style={[styles.item, status==='disable' && styles.disableItem]} disabled={status === 'disable' ? true : false}>
        <Text>{time}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: '#802384',
    paddingHorizontal: 24,
    minWidth: 90,
    paddingVertical: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  disableItem: {
    backgroundColor: '#eaeced',
    opacity: 0.5,
    borderColor: '#000',
    borderWidth: 1
  }
});

export default Time;
