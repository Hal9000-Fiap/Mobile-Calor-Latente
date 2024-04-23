import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';




export default function saidaDados({ navigation, route }) {
  const dadosRecebidos = route.params.dados;


  const { massa, calorLatente } = dadosRecebidos;


  const calcularCalorLatente = () => {
      const calorLatenteTotal = massa * calorLatente;
      return calorLatenteTotal;
  };



    return (
      <View style={styles.container}>
      <Text>Massa: {massa} kg</Text>
      <Text>Calor latente específico: {calorLatente} J/kg</Text>
      <Text>Calor latente total: {calcularCalorLatente()} J</Text>
      <Button
          title="Sair"
          onPress={() => navigation.goBack()}
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