import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Input extends Component {
  state = {
    text: '',
  };

  handleAdd = () => {
    if (this.state.text.trim() !== '') {
      this.props.onAdd(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputField}
          placeholder="Add fruits"
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        <TouchableOpacity onPress={this.handleAdd}>
          <Ionicons name="add" size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  inputField: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 1,
    color: 'black',
  },
});
