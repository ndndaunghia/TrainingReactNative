import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, { Component } from 'react';
import Fruit from './Fruit';
import Ionicons from 'react-native-vector-icons/Ionicons';
import base64 from 'react-native-base64';
import Input from './Input';

const API_URL = 'https://api.github.com/repos/minhnguyenit14/mockend/readme';
const RANDOM_IMAGE = 'https://random.imagecdn.app/500/150';

export default class ListFruit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      fruits: [],
      loading: false,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    fetch(API_URL)
      .then(async (res) => {
        const json = await res.json();
        const replaceJson = json.content.replace(/\n/g, '');
        const data = base64.decode(replaceJson);
        const convertJson = JSON.parse(data);
        this.setState({ fruits: convertJson.fruits });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async handleAdd() {
    this.setState({ loading: true });
    if (this.state.text.trim() !== '') {
      try {
        const response = await fetch(RANDOM_IMAGE);
        this.setState({ loading: false });
        const randomImg = response.url;
        const updateFruits = [...this.state.fruits];
        updateFruits.unshift({
          name: this.state.text,
          imageUrl: randomImg,
        });
        this.setState({ fruits: updateFruits });
        this.setState({ text: '' });
      } catch (error) {
        console.log(error);
      }
    } else return;
  }

  handleRemove(index) {
    const updateFruits = [...this.state.fruits];
    updateFruits.splice(index, 1);
    this.setState({fruits: updateFruits})
  }


  render() {

    return (
      <View style={styles.container}>
        {/* <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputField}
            placeholder="Add fruits"
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
          />
          <TouchableOpacity onPress={this.handleAdd}>
            <Ionicons name="add" size={25} />
          </TouchableOpacity>
        </View> */}
        <Input />
        {this.state.loading === true ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : null}
        <ScrollView style={styles.scroll}>
          {Array.isArray(this.state.fruits)
            ? this.state.fruits.map((item, index) => {
                return (
                  <Fruit
                    name={item.name}
                    imageUrl={item.imageUrl}
                    key={index}
                    index={index}
                    removeItem={this.handleRemove}
                  />
                );
              })
            : null}
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
  inputWrapper: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 30
  },
  inputField: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    flexGrow: 2,
    color: 'black',
  },
  scroll: {
    paddingHorizontal: 30
  }
});
