import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import News from './screens/News';
import Detail from './screens/DetailNews';

const Stack = createStackNavigator();

const App = () => {
  return <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="home" 
          component={Home} 
          options={{title: "CNN Indonesia"}}
          />

          <Stack.Screen 
          name="news" 
          component={News} 
          options={{title: "News List"}}
          />

          <Stack.Screen 
          name="detail" 
          component={Detail} 
          options={{title: "Detail News"}}
          />
      </Stack.Navigator>
  </NavigationContainer>
}

export default App;