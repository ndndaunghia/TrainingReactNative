import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import base64 from "react-native-base64";
import ListFruits from "./ListFruits/ListFruits";

const API_URL = "https://api.github.com/repos/minhnguyenit14/mockend/readme";

export default function App() {
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((json) => setData(json.content))
  //     .catch((error) => console.log(error));
  // }, []);

  // const fruits = base64.decode(data);
  // console.log(fruits);

  return (
    <View>
      <View style={styles.header}>
       <Text style={styles.title}>Fruits List</Text>
      </View>
      <ListFruits/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    padding: 40,
    justifyContent: "center",
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
  }
  
});
