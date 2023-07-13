import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fruit from './Fruits/Fruit';
import base64 from 'react-native-base64';

const API_URL = 'https://api.github.com/repos/minhnguyenit14/mockend/readme';
const RANDOM_IMAGE = 'https://images.dog.ceo/breeds/setter-english/n02100735_5978.jpg';

export default function ListFruits() {
  const [dataFruits, setDataFruits] = useState();
  const [newFruit, setNewFruit] = useState('');
 
  useEffect(() => {
    fetch(API_URL)
      .then(async (res) => {
        const json = await res.json();
        const replaceJson = json.content.replace(/\n/g, '');
        const data = base64.decode(replaceJson);
        const convertJson = JSON.parse(data);
        setDataFruits(convertJson.fruits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = () => {
    if(newFruit.trim() !== ""){
      // setData({name: newFruit, imageUrl: RANDOM_IMAGE});
      setNewFruit("");
      dataFruits.unshift({name: newFruit, imageUrl: RANDOM_IMAGE});
    }
    else 
      return;
  };

  const handleDelete = (index) => {
    dataFruits.splice(index, 1);
  }
  
  return (
    <SafeAreaView>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputField}
          placeholder="Add fruits"
          value={newFruit}
          onChangeText={(newFruit) => setNewFruit(newFruit)}
        />
        <TouchableOpacity>
          <Ionicons name="add" size="25" onPress={handleSubmit} />
        </TouchableOpacity>
      </View>
    <ScrollView style={styles.container}>
      {Array.isArray(dataFruits)
        ? dataFruits.map((fruit, index) => {
            return (
              <Fruit key={index} name={fruit.name} imageUrl={fruit.imageUrl} />
            );
          })
        : null}
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 40,
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
