import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import useFetch from '../hooks/useFetch';

export default function DashboardScreen({ navigation }) {
  // Usando custom hook para buscar posts da API pública
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', { post: item })}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={2}>{item.body}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posts da API Pública</Text>

      {loading && <Text>Carregando...</Text>}
      {error && <Text>Erro ao carregar dados.</Text>}

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 15 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: { fontWeight: 'bold', marginBottom: 5 },
});
