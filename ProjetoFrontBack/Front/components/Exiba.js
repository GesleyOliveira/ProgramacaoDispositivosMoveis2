import React from "react";
import { View, Text, FlatList } from "react-native"
import DadoDelete from "./Delete";

const DadoExiba=({ campo }) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FlatList 
                data={campo}
                    renderItem= {({item}) => {
                        return(
                            <View style={{margin: 20, backgroundColor: '#00ffff', padding: 5, border: "1px solid #000"}}>
                                <Text>{item._id}</Text>
                                <Text>{item.name}</Text>

                                <DadoDelete id={item._id}/>
                            </View>
                        )
                    }}
            />
        </View>
    )
}

export default DadoExiba;