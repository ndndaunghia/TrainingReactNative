import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ListFruits from './ListFruits/ListFruits';


export default function App() {

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Fruits List</Text>
      </View>
      <ListFruits />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingHorizontal: 40,
    paddingVertical: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
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
