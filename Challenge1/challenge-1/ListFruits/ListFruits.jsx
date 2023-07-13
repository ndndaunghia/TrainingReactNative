import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Fruit from './Fruits/Fruit'

export default function ListFruits() {
  return (
    <View style={styles.container}>
        <Fruit/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingVertical: 20
    }
})