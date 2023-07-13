import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";

export default function Fruit() {
  return (
    <View style={styles.fruitContainer}>
      <View style={styles.fruitItem}>
        <Text style={styles.fruitContent}>Carrot</Text>
      </View>
      <Feather name="trash" size="25" style={styles.icon}/>
    </View>
  );
}

const styles = StyleSheet.create({
  fruitContainer: {
    flexDirection: 'row',
  },

  fruitItem: {
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
  },

  fruitContent: {
    fontSize: "20",
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
