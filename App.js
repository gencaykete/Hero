import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeroPage from "./src/Screens/HeroPage";
import HomePage from "./src/Screens/HomePage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Süper Kahramanlar' }} />
          <Stack.Screen name="HeroPage" component={HeroPage} options={{ title: 'Süper Kahraman Detayı' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
