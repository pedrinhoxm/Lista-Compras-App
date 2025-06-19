import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import api from '../services/api';

export default function EditarCompraScreen({ route, navigation }) {
  const { compra } = route.params;
  const [titulo, setTitulo] = useState(compra.titulo);
  const [descricao, setDescricao] = useState(compra.descricao);

  const atualizarCompra = async () => {
    if (!titulo.trim()) {
      Alert.alert("Erro", "O nome do item é obrigatório");
      return;
    }

    try {
      await api.put(`/compras/${compra.id}`, {
        titulo,
        descricao,
        concluida: compra.concluida,
      });
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar a compra");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Digite o nome do item"
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.inputDescricao]}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite a descrição do item"
        multiline
      />

      <TouchableOpacity style={styles.botao} onPress={atualizarCompra}>
        <Text style={styles.botaoTexto}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputDescricao: {
    height: 100,
    textAlignVertical: 'top',
  },
  botao: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 