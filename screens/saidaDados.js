import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';




export default function saidaDados({ navigation, route }) {
  const dadosRecebidos = route.params.dados;



  
    return (
      <View style={styles.container}>
            <Text>Valor 1: {dadosRecebidos.valor1}</Text>
            <Text>Valor 2: {dadosRecebidos.valor2}</Text>
            <Text>Valor 3: {dadosRecebidos.valor3}</Text>
        <Button
          title="Sair"
          onPress={() => navigation.goBack()}/>
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