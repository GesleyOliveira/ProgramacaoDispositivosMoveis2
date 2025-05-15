import { StatusBar } from 'expo-status-bar';
import { use, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Banco, createTabela, insertUsuario } from './Conf/Bd';

export default function App() {
  useEffect(() => {
      async function Inicia() {
        let bd = await Banco();
        await createTabela(bd);
        insertUsuario(bd, 'Gesley', '@Gesley');
        const linhas  await selectUsuario(bd);
      };
      Inicia();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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




