import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';


export default function entradaDados({ navigation }) {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');

  const calcular = () => {
    const dados = {
        valor1: valor1,
        valor2: valor2,
        valor3: valor3
    };
    navigation.navigate('saidaDados', { dados: dados });
};
    return (
       <View style={styles.container}>
            <Text>Página para cálculo da lei calor latente</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite valor 1"
                onChangeText={text => setValor1(text)}
                value={valor1}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite valor 2"
                onChangeText={text => setValor2(text)}
                value={valor2}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite valor 3"
                onChangeText={text => setValor3(text)}
                value={valor3}
            />
            <Button
                title="Calcular"
                onPress={calcular}
            />
            <StatusBar style="auto" />
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });