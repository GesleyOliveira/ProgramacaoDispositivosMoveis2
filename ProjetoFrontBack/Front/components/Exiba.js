import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import DadosDeletado from "./Delete"; // Assuming this is for deletion action

const DadosExibido = ({ campo }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={campo}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.label}>ID:</Text>
            <Text style={styles.text}>{item._id}</Text>

            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.text}>{item.nome}</Text>

            {item.email && (
              <>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.text}>{item.email}</Text>
              </>
            )}

            {item.password && (
              <>
                <Text style={styles.label}>Senha:</Text>
                <Text style={styles.text}>{item.password}</Text>
              </>
            )}

            <DadosDeletado id={item._id} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#e0f7fa',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  text: {
    marginBottom: 6,
    fontSize: 16,
    color: '#555',
  },
});

export default DadosExibido;
