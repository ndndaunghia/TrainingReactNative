import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
export class Time extends Component {
  render() {
    const { time, status, isSelected} = this.props;
    
    return (
      <TouchableOpacity
        style={[
          styles.item,
          status === 'disable' && styles.disableItem,
          isSelected && styles.itemSelected,
        ]}
        disabled={status === 'disable' ? true : false}
        onPress={() => this.props.selectItem()}>
        <Text style={isSelected && styles.timeContent}>{time}</Text>
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
    alignItems: 'center',
    // alignSelf: 'center'
  },
  disableItem: {
    backgroundColor: '#eaeced',
    opacity: 0.5,
    borderColor: '#000',
    borderWidth: 1,
  },
  itemSelected: {
    backgroundColor: '#802384',
  },
  timeContent: {
    color: '#fff'
  }
});

export default Time;
