import { StatusBar } from 'expo-status-bar';
import { Keyboard, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Fruit from './Components/Fruit';
import ListFruit from './Components/ListFruit';
import { Component } from 'react';

export default class App extends Component {
  state = {
    isShowKeyboard: false,
  };
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({ isShowKeyboard: true });
  };

  _keyboardDidHide = () => {
    this.setState({ isShowKeyboard: false });
  };

  render() {
    return (
      <SafeAreaView
        style={[
          styles.container,
          this.state.isShowKeyboard && { opacity: 0.6 },
        ]}
        onTouchStart={Keyboard.dismiss}>
        <View style={styles.header}>
          <Text style={styles.title}>Fruits List</Text>
        </View>
        <ListFruit />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
  },
});
