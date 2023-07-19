import { StyleSheet } from 'react-native';
import FinanceManagement from './FinanceManagement';

export default function App() {
  return (
    <FinanceManagement />
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
