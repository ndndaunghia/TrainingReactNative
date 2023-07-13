import { View, Text, StyleSheet, LogBox, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Fruit from './Fruits/Fruit';
import base64 from 'react-native-base64';

const API_URL = 'https://api.github.com/repos/minhnguyenit14/mockend/readme';

export default function ListFruits() {
  const [dataFruits, setDataFruits] = useState();
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

  return (
    <ScrollView style={styles.container}>
      {Array.isArray(dataFruits)
        ? dataFruits.map((fruit, index) => {
            return (
              <Fruit key={index} name={fruit.name} imageUrl={fruit.imageUrl} />
            );
          })
        : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
});
