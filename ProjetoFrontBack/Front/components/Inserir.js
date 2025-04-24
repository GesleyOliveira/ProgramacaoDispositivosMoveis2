import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native"
import { useState } from "react";


const DadoInserir = () => {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const AddUser = async () => {
    await fetch('http://localhost:3000/add', {
      method: 'POST',
      body: JSON.stringify({
        nome: nome,
        email: email,
        senha: senha
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then((resp) => resp.json())
    .then((json) => {
      console.log(json);
      alert('Usuário cadastrado com sucesso!');
    })
    .catch((error) => {
      console.error("Erro ao cadastrar:", error);
      alert('Erro ao cadastrar');
    });
};

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        onChangeText={setNome}
        placeholder="Digite seu nome"
        style={styles.input}
        value={nome}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        style={styles.input}
        value={email}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        secureTextEntry
        style={styles.input}
        value={senha}
      />

      <View style={styles.buttonWrapper}>
        <Button title="Cadastrar" onPress={AddUser} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
    margin: 20,
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    //alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonWrapper: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden', 
    color: '#007BFF'
  }
});

export default DadoInserir;