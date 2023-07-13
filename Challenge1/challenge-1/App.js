import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import base64 from 'react-native-base64';
import ListFruits from './ListFruits/ListFruits';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fruit from './ListFruits/Fruits/Fruit';

const API_URL = 'https://api.github.com/repos/minhnguyenit14/mockend/readme';
const RANDOM_IMAGE = 'https://images.dog.ceo/breeds/setter-english/n02100735_5978.jpg';
let newListFruits = [];

export default function App() {

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Fruits List</Text>
      </View>
      <ListFruits />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingHorizontal: 40,
    paddingVertical: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
  },
  inputWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
});
