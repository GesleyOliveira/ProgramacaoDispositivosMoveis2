import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import DadoInserir from './components/Inserir';
import DadoExiba from './components/Exiba'

export default function App() {
  const [campos, setDados] = useState([])

  
  useEffect(() => {

    let url = 'http://localhost:3000/';

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        setDados(json);
        //console.log(campos);
      }
      );

  }, [campos]); 

  // get
  //'http://172.16.4.101:3000/';
  const Exibir = () => {
    let url = 'http://localhost:3000/';
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDados(json);

      }
      );
  }

  //post

  const Add = () => {
    let url = 'http://172.16.4.101:3000/add/';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        nome: 'Gesley',
        email: 'gesleyrosa@email.com'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  // PATCH
  const Atualizar = (id) => {
    let url = `http://192.168.67.126:3000/update/${id}`;
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        nome: 'Lobo',
        email: '@lobo'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  //PUT
  const Atualizar0 = (id) => {
    let url = `http://172.68.0.156:3000/put_update/${id}`;
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify({
        nome: 'Lobo',
        email: '@lobo'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }


  const Delete = (id) => {
    let url = `http://172.16.4.101:3000/delete/${id}`;
    console.log(url);
    fetch(url, {
      method: 'DELETE',
    }).then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Gerenciamento de Usuários</Text>

          <DadoInserir />


        <TouchableOpacity style={styles.btn} onPress={() => Exibir()}>
          <Text style={styles.btnText}>Exibir</Text>
        </TouchableOpacity>

        
        <DadoExiba campo={campos} />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#007BFF',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    width: '20%',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  }
});


