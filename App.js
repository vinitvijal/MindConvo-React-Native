
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/Tabs';
import { StatusBar, Image } from 'react-native';
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubscriptionManage from './pages/SubscriptionManage';
import FAQ from './pages/FAQ';
import InviteFriend from './pages/InviteFriend';
import About from './pages/About';
import Settings from './pages/Settings';
import { useState } from 'react/cjs/react.development';
import ShowOnboardScreen from './components/ShowOnboardScreen';
import Login from './screen/Login';
import Blogs from './screen/Blogs';
import EBooks from './screen/EBooks';
import Podcasts from './screen/Podcasts';
import Tools from './screen/Tools';


const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
      <Tabs/>
  );
}

function App() {
  const [login, setLogin] = useState(false);

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator options={{headerShown: false}} screenOptions={{headerShown: false}} >
          <Stack.Screen name="OnboardFlow" component={ShowOnboardScreen} />
          <Stack.Screen name="Profile" component={SubscriptionManage} />
          <Stack.Screen name="Subscription" component={SubscriptionManage} />
          <Stack.Screen name="FAQ" component={FAQ} />
          <Stack.Screen name="Home" component={MyTabs} />
          <Stack.Screen name="InviteFriend" component={InviteFriend} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Blogs" component={Blogs} />
          <Stack.Screen name="EBooks" component={EBooks} />
          <Stack.Screen name="Podcasts" component={Podcasts} />
          <Stack.Screen name="Tools" component={Tools} />          
        </Stack.Navigator>
        <StatusBar barStyle="dark" />
      </NavigationContainer>
    </GluestackUIProvider>
  );


}

export default App;