import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './FinanceManagement/Login';
import Profile from './FinanceManagement/Profile';
import FinanceManagement from './FinanceManagement/FinanceManagement';
import RecentTrans from './FinanceManagement/Recent-Trans';

export default function App() {
  return (

    <FinanceManagement/>
    // <RecentTrans/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
