import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React, { Component } from 'react';
import Fruit from './Fruit';
import Ionicons from 'react-native-vector-icons/Ionicons';
import base64 from 'react-native-base64';
import Input from './Input';

const API_URL = 'https://api.github.com/repos/minhnguyenit14/mockend/readme';
const RANDOM_IMAGE = 'https://random.imagecdn.app/500/150';
const USER_URL = 'https://jsonplaceholder.typicode.com/users';

export default class ListFruit extends Component {
  state = {
    fruits: [],
    loading: false,
  };
  isUnmounted = false;
  fetchTimeoutId = -1;
  controller = new AbortController();
  signal = this.controller.signal;

  componentDidMount() {
    // fetch(API_URL)
    //   .then(async (res) => {
    //     const json = await res.json();
    //     const replaceJson = json.content.replace(/\n/g, '');
    //     const data = base64.decode(replaceJson);
    //     const convertJson = JSON.parse(data);
    //     this.setState({ fruits: convertJson.fruits });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    fetch(USER_URL, { signal: this.signal })
      .then(async (res) => {
        const response = await res.json();
        this.setState({
          fruits: response.map((item) => ({
            id: Date.now(),
            ...item,
          })),
        });
        // this.fetchTimeoutId = setTimeout(() => {
        // if (this.isUnmounted) {
        //   return;
        // }

        //   () => {
        //     console.log(this.state);
        //   },
        // );
        // }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    this.isUnmounted = true;
    clearTimeout(this.fetchTimeoutId);
    this.controller.abort();
  }

  handleAdd = (text) => {
    this.setState({ loading: true });
    fetch(RANDOM_IMAGE)
      .then((response) => response.url)
      .then((randomImg) => {
        this.setState((prevState) => {
          const updatedFruits = [
            {
              name: text,
              imageUrl: randomImg,
            },
            ...prevState.fruits,
          ];

          return { fruits: updatedFruits, loading: false };
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleRemove = (index) => {
    if (this.state.loading === false) {
      this.setState((prevState) => {
        const updateFruits = [...prevState.fruits];
        updateFruits.splice(index, 1);
        return { fruits: updateFruits };
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Input onAdd={this.handleAdd} />
        {this.state.loading && (
          <ActivityIndicator size="small" color="#0000ff" />
        )}
        <ScrollView
          style={styles.listContainer}
          keyboardDismissMode="interactive">
          {this.state.fruits.map((item, index) => {
            return (
              <Fruit
                key={index}
                name={item.name}
                imageUrl={item.imageUrl}
                removeItem={() => this.handleRemove(index)}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 30,
    marginTop: 15,
  },
  listContainer: {
    paddingHorizontal: 30,
  },
});
