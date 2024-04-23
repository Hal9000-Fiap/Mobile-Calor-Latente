import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import react from 'react';



export default function saidaDados({ navigation }) {

    return (
      <View style={styles.container}>
        <Text> {x.teste} </Text> 
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