import React from "react";
import { View, Text, TextInput } from "react-native"
import { useState } from "react";
import { Button } from "react-native-web";


const DadoInserir = () => {
    const[nome, setNome] = useState(null);

    const AddUser = async () => {
        await fetch('http://localhost:3000/add', {
          method: 'POST',
          body: JSON.stringify({
            name: nome,
            email: _email
          }),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        }).then((resp) => resp.json())
          .then((json) => {
            console.log(json);
          })
      };

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', border: "1px solid #000", margin: 20, padding: 5}}>
            <Text>Nome</Text>
            <TextInput onChangeText={(text) => setNome(text)} style={{border: "1px solid #000", margin: 20, padding: 5}}/>
            <Button
                title="Cadastrar"
                onPress={() => {AddUser()}}/>
        </View>
    )
}

export default DadoInserir;