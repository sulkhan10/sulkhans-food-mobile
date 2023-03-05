
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import About from "./src/screens/About";
import Login from "./src/screens/Login";
import Order from "./src/screens/Order";
import News from "./src/screens/News";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const client = new ApolloClient({
  uri: 'https://sulkhans-db-mobile.galangsakti.shop',
  // uri: 'http://192.168.34.133',
  cache: new InMemoryCache(),
});
const Tab = createMaterialBottomTabNavigator();


function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      theme={{colors: {secondaryContainer: 'yellow'}}}
      activeColor="#fef08a"
      inactiveColor="#fef08a"
      barStyle={{ 
        backgroundColor: "#16a34a" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarLabel: "Order",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="note-check" size={24}  color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper-variant" size={24} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="information-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}> 

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
     </ApolloProvider>

  );
}

