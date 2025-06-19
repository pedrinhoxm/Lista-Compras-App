import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import NovaCompraScreen from './src/screens/NovaCompraScreen';
import EditarCompraScreen from './src/screens/EditarCompraScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Lista de Compras' }}
        />
        <Stack.Screen
          name="NovaCompra"
          component={NovaCompraScreen}
          options={{ title: 'Nova Compra' }}
        />
        <Stack.Screen
          name="EditarCompra"
          component={EditarCompraScreen}
          options={{ title: 'Editar Compra' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 