import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import DadoDelete from './Delete';
import DadoEditar from './Editar';
import { useEffect, useState } from 'react';
 
const DadoExiba = () => {
    const [campo, setCampos] = useState([]);
    const [list, setList] = useState(true);
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState('');
 
    useEffect(() => {
        const Exibir = async() => {
            await fetch('http://localhost:3000/')
            .then((resp) => resp.json())
            .then((resp) => setCampos(resp))
        };
        Exibir();    
    }, [campo]);

    function fecharEditar(){
        setVisible(false);
    }
 
    return list == false ?
        (
            <View style={styles.container}>
                <Button title='Listar Usuários' onPress={() => setList(true)}/>
            </View>
        ) : (
            <View style={styles.container}>
              <Button title='Esconder Usuários' onPress={() => setList(false)} />
                <br>
                </br>
                <FlatList
                    data={campo}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.idText}>ID: {item._id}</Text>
                            <Text style={styles.nameText}>Nome: {item.nome}</Text>
                            <Text style={styles.emailText}>Email: {item.email}</Text>
                            <DadoDelete id={item._id} />
                            <Button title='Editar' onPress={() => { setVisible(true); setId(item._id) }} />
                        </View>
                    )}
                    keyExtractor={(item) => item._id.toString()}
                />
                <DadoEditar id={id} statusVisible={visible} fecharEditar={fecharEditar}/>
                
            </View>
        );
};
 
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        flex: 1,
    },
    itemContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        marginHorizontal: 10, // Garantindo que o item não fique colado nas bordas
    },
    idText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#333',
        marginBottom: 6,
    },
    nameText: {
        fontSize: 16,
        color: '#2d2d2d',
        marginBottom: 4,
    },
    emailText: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10, // Mais espaço entre o email e o botão
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginTop: 8,
    },
});
 
export default DadoExiba;