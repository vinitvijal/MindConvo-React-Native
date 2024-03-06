
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/Tabs';
import { StatusBar } from 'react-native';
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubscriptionManage from './pages/SubscriptionManage';
import FAQ from './pages/FAQ';
import InviteFriend from './pages/InviteFriend';
import About from './pages/About';
import Settings from './pages/Settings';


const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
      <Tabs/>
  );
}

function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator options={{headerShown: false}} initialRouteName="Home" screenOptions={{headerShown: false}} >
          <Stack.Screen name="Home" component={MyTabs} />
          <Stack.Screen name="Subscription" component={SubscriptionManage} />
          <Stack.Screen name="FAQ" component={FAQ} />
          <Stack.Screen name="InviteFriend" component={InviteFriend} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
        <StatusBar barStyle="dark" />

      </NavigationContainer>
    </GluestackUIProvider>

  );
}

export default App;