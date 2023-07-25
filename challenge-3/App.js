import { StatusBar } from 'expo-status-bar';
import { Keyboard, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TimeSelector from './TimeSelector';

export default function App() {
  return (
    <>
    <SafeAreaView onTouchStart={Keyboard.dismiss} style={styles.container}> 
    <TimeSelector/>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
