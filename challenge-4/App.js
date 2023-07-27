import { StyleSheet, SafeAreaView, View } from 'react-native';
import Main from './Containers/Main';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Main/>
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
});
