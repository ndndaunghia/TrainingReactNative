import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export class InputValue extends Component {
  render() {
    const { status, textValue } = this.props;
    return (
      <View
        style={[
          styles.inputWrapper,
          status === 1
            ? { backgroundColor: 'green' }
            : status === 2
            ? { backgroundColor: 'yellow' }
            : status === -1
            ? { backgroundColor: 'grey' }
            : null,
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
