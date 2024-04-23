import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import React, { useState } from 'react';


export default function entradaDados({ navigation }) {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');


  const calcular = () => {
    const massa = parseFloat(valor1);
    const calorLatente = parseFloat(valor2);

    const dados = {
        massa: massa,
        calorLatente: calorLatente
    };
    navigation.navigate('saidaDados', { dados: dados });
};

    return (
       <View style={styles.container}>
         <Image
                source={require('../assets/Gelo.png')} // Caminho para a imagem
                style={styles.imagem}
            />
            <Text>Página para cálculo da lei calor latente</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite a massa em kg"
                onChangeText={text => setValor1(text)}
                value={valor1}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o calor latente específico em J/kg"
                onChangeText={text => setValor2(text)}
                value={valor2}
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
    },   imagem: {
      width: 200, 
      height: 200, 
      marginVertical: 20, 
  }, 
  input: {
      height: 40,
      width: '80%',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
  },
  button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
  },
  });