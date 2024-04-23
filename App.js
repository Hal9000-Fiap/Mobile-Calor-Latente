import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import screens
import entradaDados from './app-screens/screens/entradaDados';
import saidaDados from './app-screens/screens/saidaDados';

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Entrada Dados" component={entradaDados} />
      <Stack.Screen name="Saída Dados" component={saidaDados} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
