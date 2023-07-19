import { Component } from 'react';
import { Keyboard, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ListFruit from './components/ListFruit';

export default class App extends Component {
  state = {
    isShowKeyboard: false,
  };
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidHideListener.remove();
    this.keyboardDidShowListener.remove();
  }
  keyboardDidShow = () => {
    this.setState({ isShowKeyboard: true });
  };

  keyboardDidHide = () => {
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
