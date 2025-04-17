import React from "react";
import { View, Pressable, Text } from "react-native"

const DadoDelete = (props) => {

    const Delete = async (id) => {
        await fetch(`http://localhost:3000/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
            .then((resp) => resp.json())
            .then((json) => {
                window.alert(json.Msg)
                window.location.reload()
            })
    };

    return (
        <View>
            <Pressable onPress={() => { Delete(props.id) }}
                style={{ margin: 20, backgroundColor: '#00ffff', padding: 5, border: "1px solid #000" }}>
                <Text>Excluir</Text>
            </Pressable>
        </View>
    )
}

export default DadoDelete;