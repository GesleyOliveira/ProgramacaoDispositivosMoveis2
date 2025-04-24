import React from "react";
import { FlatList, View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";


const DadosInsert = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const Add = () => {
        let url = 'http://localhost:3000/add/';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                nome:  nome,
                email: email,
                senha: senha
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <View style={{ border: '1px solid #000000', margin: 20, padding: 5 }}>
            <Text>Nome:</Text>
            <TextInput stye={{
                height: 40,
                margin: 12,
                border: '1px solid #000000',
                padding: 10,

            }}
                
                onChangeText={(text)=>setNome(text)}

            />
            <Text>Email:</Text>
            <TextInput stye={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
            }}
                onChangeText={(text)=>setEmail(text)}

            />
             <Button
                title="Cadastrar"
                onPress={() => {Add()}}
            />
        </View>
    )

}


export default DadosInsert;