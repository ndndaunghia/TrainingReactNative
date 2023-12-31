import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Fruit from "./Fruits/Fruit";
import base64 from "react-native-base64";

const API_URL = "https://api.github.com/repos/minhnguyenit14/mockend/readme";
const RANDOM_IMAGE = "https://random.imagecdn.app/500/150";

export default function ListFruits() {
  const [dataFruits, setDataFruits] = useState();
  const [newFruit, setNewFruit] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then(async (res) => {
        const json = await res.json();
        const replaceJson = json.content.replace(/\n/g, "");
        const data = base64.decode(replaceJson);
        const convertJson = JSON.parse(data);
        setDataFruits(convertJson.fruits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async () => {
    if (newFruit.trim() !== "") {
      setNewFruit("");
      try {
        const response = await fetch(RANDOM_IMAGE);
        const randomImg = response.url;
        dataFruits.unshift({ name: newFruit, imageUrl: randomImg });
        setDataFruits([...dataFruits]);
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };

  const handleDeleteFruit = (index) => {
    const updateFruit = [...dataFruits];
    updateFruit.splice(index, 1);
    setDataFruits(updateFruit);
  };

  return (
    <>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputField}
          placeholder="Add cc"
          value={newFruit}
          onChangeText={(newFruit) => setNewFruit(newFruit)}
        />
        <TouchableOpacity>
          <Ionicons name="add" size={25} onPress={handleSubmit} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        {Array.isArray(dataFruits)
          ? dataFruits.map((fruit, index) => {
              return (
                <Fruit
                  key={index}
                  name={fruit.name}
                  index={index}
                  imageUrl={fruit.imageUrl}
                  deleteItem={handleDeleteFruit}
                />
              );
            })
          : null}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 15,
  },
  inputWrapper: {
    flexDirection: "row",
    paddingHorizontal: 30,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
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
