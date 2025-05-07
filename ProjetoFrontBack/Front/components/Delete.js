import React, { useEffect } from "react";
import { View, Button, Pressable, Text } from 'react-native';



const DadosDeletado = (props) => {


    const Delete = (id, onDelete) => {
        let url = `http://localhost:3000/delete/${id}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE',
        }).then((response) => response.json())
            .then((json) => console.log(json));
    }


    return (
        <View>
            <Button onPress={() => { Delete(props.id) }} title="Deletar" />
                <br>
                </br>
        </View>

    )
}

export default DadosDeletado;