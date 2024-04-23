import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function saidaDados({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>FIAP</Text>
        <Text>Resultado.</Text>
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