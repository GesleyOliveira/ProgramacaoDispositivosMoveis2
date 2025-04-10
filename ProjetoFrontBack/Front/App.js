import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const addUser= () => {
    fetch('http://10.68.153.131/add', {
      method: 'POST',
      body:JSON.stringify({
        name: 'Gesley',
        email: 'geeh.oli@email.com'
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text>Teste</Text>
      <Button onPress={addUser} title={'Botão POST'}/>
      <StatusBar style="auto" />
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
});
