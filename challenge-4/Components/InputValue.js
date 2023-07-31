import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class InputValue extends Component {
  render() {
    return (
      <View style={styles.inputWrapper}>
        <Text style={styles.inputContent}>{this.props.textValue}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    inputWrapper :{
        borderColor: '#000',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        minWidth: 62,
        minHeight: 62,
        marginHorizontal: 4
    },
    inputContent: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default InputValue