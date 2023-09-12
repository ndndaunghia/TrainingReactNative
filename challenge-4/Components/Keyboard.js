import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import { renderColor } from './helper';
export class Keyboard extends Component {
  render() {
    return (
      <View style={styles.keyboardWrapper}>
        {this.props.data.map((data, index) => {
          return (
            <View style={styles.keyboardRow} key={index}>
              {data.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.itemKeyboard,
                      {
                        backgroundColor: renderColor(item.status),
                      },
                    ]}
                    key={index}
                    onPress={() => this.props.handlePress(item.value)}>
                    <Text style={styles.itemKeyboardContent}>{item.value}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyboardWrapper: {
    flexDirection: 'row',
    padding: 20,
    gap: 6,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemKeyboard: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 8,
    borderRadius: 4,
    minWidth: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemKeyboardContent: {
    fontWeight: 'bold',
  },
  keyboardRow: {
    flexDirection: 'row',
    gap: 6,
  },
});

export default Keyboard;
