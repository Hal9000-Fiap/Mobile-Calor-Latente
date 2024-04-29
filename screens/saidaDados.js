import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function SaidaDados({ navigation, route }) {
  const dadosRecebidos = route.params.dados;
  const { massa, calorLatente } = dadosRecebidos;

  const calcularCalorLatente = () => {
    const calorLatenteTotal = massa * calorLatente;
    return calorLatenteTotal;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado do Cálculo</Text>
      
      <Image
        source={require('../assets/calor.jpeg')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.text}>Massa: {massa} kg</Text>
      <Text style={styles.text}>Calor latente específico: {calorLatente} J/kg</Text>
      <Text style={styles.text}>Calor latente total: {calcularCalorLatente()} J</Text>
      
      <Button
        title="Sair"
        onPress={() => navigation.goBack()}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200, // Ajuste de acordo com a largura desejada da imagem
    height: 200, // Ajuste de acordo com a altura desejada da imagem
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
