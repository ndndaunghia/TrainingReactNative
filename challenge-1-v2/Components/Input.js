import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleAdd = () => {
    const { onAdd } = this.props;
    const { text } = this.state;
    if (text.trim() !== "") {
      onAdd(text);
      this.setState({ text: "" });
    }
    else
      return;
  };

  render() {
    const { text } = this.state;
    return (
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputField}
          placeholder="Add fruits"
          value={text}
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
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 30,
  },
  inputField: {
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    paddingHorizontal: 10,
    flexGrow: 2,
    color: "black",
  },
});
