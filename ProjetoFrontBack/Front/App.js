import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import DadoExiba from './components/Exiba';
import DadoInserir from './components/Inserir';

export default function App() {

  // será utilizado para armazenar os dados db
  const [campos, setCampos] = useState([]);

  // renderizar o componente
  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setCampos(resp)
      })
  }, []);

  const Exibir = async () => {
    await fetch('http://localhost:3000/')
      .then((resp) => resp.json())
      .then((resp) => console.log(resp))
  };


  const AddUser = async () => {
    await fetch('http://localhost:3000/add', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Gesley',
        email: 'Gesley@email.com'
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then((resp) => resp.json())
      .then((json) => {
        console.log(json);
      })
  };

  const Atualizar = async (id) => {
    await fetch(`http://localhost:3000/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: 'ABC',
        email: 'abc@email.com'
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
      .then((resp) => resp.json())
      .then((json) => console.log(json))
  };

  const Deletar = async (id) => {
    await fetch(`http://localhost:3000/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
      .then((resp) => resp.json())
      .then((json) => console.log(json))
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Teste</Text>
        <Button onPress={Exibir} title={'Botão Exibir'} />
        <Button onPress={AddUser} title={'Botão POST'} />
        <Button onPress={() => Atualizar('67eddaebb374b556f6172bea')} title={'Botão Atualizar'} />
        <Button onPress={() => Deletar('67eddaebb374b556f6172bea')} title={'Botão Deletar'} />
        <DadoExiba campo={campos} />
        <StatusBar style="auto" />

      </View>
    </ScrollView>
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