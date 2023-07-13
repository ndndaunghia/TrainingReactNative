import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

export default function Fruit(props) {
  return (
    <View style={styles.fruitContainer}>
      <View style={styles.fruitItem}>
        <Image
          source={{ uri: props.imageUrl }}
          style={{ width: 30, height: 30 }}
        />
        <Text style={styles.fruitContent}>{props.name}</Text>
      </View>
      <TouchableOpacity>
        <Feather name="trash" style={styles.icon} size="25" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fruitContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
  },

  fruitItem: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },

  fruitContent: {
    fontSize: 20,
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
