import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Fruit from './Components/Fruit';
import ListFruit from './Components/ListFruit';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.header}>
        <Text style={styles.title}>Fruits List</Text>
      </View>
      <ListFruit/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
  },
});
