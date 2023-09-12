import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { renderColor } from './helper';
export class InputValue extends Component {
  render() {
    const { status, textValue } = this.props;
    return (
      <View
        style={[
          styles.inputWrapper,
          {
            backgroundColor: renderColor(status),
          },
        ]}>
        <Text style={styles.inputContent}>{textValue}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    minWidth: 62,
    minHeight: 62,
    marginHorizontal: 4,
    // backgroundColor: 'green'
  },
  inputContent: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default InputValue;
