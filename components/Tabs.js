
import Discover from '../screen/Discover';
import Therapy from '../screen/Therapy';
import Profile from '../screen/Profile';
import Resources from '../screen/Resources';
import Insight from '../screen/Insight';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react/cjs/react.development';
import { useNavigation } from "@react-navigation/native";
import SubscriptionManage from '../pages/SubscriptionManage';


const Tab = createMaterialBottomTabNavigator();


function Tabs() {

    const [selectedTab, setSelectedTab] = useState("Discover");
    const navigation = useNavigation();

  const handleTabPress = (name) => {
    setSelectedTab(name);
    navigation.navigate(name);
  };

  return (
  
    <Tab.Navigator
      initialRouteName="Discover"
      backBehavior="none"
      activeColor="#F7813E"
      screenOptions={{
        tabBarActiveTintColor: "#F7813E",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#FFD8B9",
          paddingHorizontal: 20,
          height: 10,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          textTransform: "none",
        },
      }}
    >
      <Tab.Screen
        name="Therapy"
        listeners={{ tabPress: () => handleTabPress("Therapy") }}
        options={{
          tabBarLabel: "Therapy",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={selectedTab === "Therapy" ? "chatbubbles" : "chatbubbles-outline"}
              color={color}
              size={25}
            />
          ),
        }}
        component={Therapy}
      />
  <Tab.Screen
        name="Insights"
        listeners={{ tabPress: () => handleTabPress("Insights") }}
        options={{
          tabBarLabel: "Insights",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={selectedTab === "Insights" ? "bar-chart" : "bar-chart-outline"}
              color={color}
              size={25}
            />
          ),
        }}
        component={Insight}
      />

<Tab.Screen
        name="Discover"
        listeners={{ tabPress: () => handleTabPress("Discover") }}
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={selectedTab === "Discover" ? "compass" : "compass-outline"}
              color={color}
              size={25}
            />
          ),
        }}
        component={Discover}
      />


<Tab.Screen
        name="Resources"
        listeners={{ tabPress: () => handleTabPress("Resources") }}
        options={{
          tabBarLabel: "Resources",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={selectedTab === "Resources" ? "book" : "book-outline"}
              color={color}
              size={25}
            />
          ),
        }}
        component={Resources}
      />

<Tab.Screen
        name="Profile"
        listeners={{ tabPress: () => handleTabPress("Profile") }}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={selectedTab === "Profile" ? "person" : "person-outline"}
              color={color}
              size={25}
            />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>

  );
}

// create style for bottom nav bar


export default Tabs;