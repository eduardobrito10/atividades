import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      <Text>Email: user@example.com</Text>
      <Text>Nome: Usuário Exemplo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
});
