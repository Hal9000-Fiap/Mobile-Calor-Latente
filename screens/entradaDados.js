import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import react from 'react';

export default function entradaDados({ navigation }) {
    const x = {
        teste: 'teste'
    }

    return (
      <View style={styles.container}>
        <Text>Página para calculo da lei calor latente</Text>
        <Button
          title="Calcular"
          onPress={() => navigation.navigate('saidaDados')}/>
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