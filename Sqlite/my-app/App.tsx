import { StatusBar } from 'expo-status-bar';
import { use, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Banco, createTabela, insertUsuario, selectUsuario, selectUsuarioById, deleteUsuarioById, updateUsuario } from './Conf/Bd';

export default function App() {
  useEffect(() => {
      async function Inicia() {''
        let bd = await Banco();
        await createTabela(bd);
        insertUsuario(bd, 'Gesley', '@Gesley');
        const linhas = await selectUsuario(bd);
        // loop
        for (const i of linhas as
          { ID_US: number; NOME_US: string; EMAIL_US: string }[]) {
            console.log(`ID: ${i.ID_US}, Nome: ${i.NOME_US}, Email: ${i.EMAIL_US}`);
        }
        const resultado = await selectUsuarioById(bd, 1);
        console.log(resultado.ID_US, resultado.NOME_US, resultado.EMAIL_US);

        await deleteUsuarioById(bd, 2);

        await updateUsuario(bd, 1, 'Gesley', '@Gesley');
        const resultadoAtualizado = await selectUsuarioById(bd, 1);

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




