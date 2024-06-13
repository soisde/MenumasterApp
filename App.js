// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import Routes from './src/routes';

// export default function App(){
//   return(
//     <NavigationContainer>
//       <Routes /> 
//     </NavigationContainer>  
//   );
// }


// import * as React from 'react';
// import { View, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import Feed from './src/tabs/feed';
// import Profile from './src/tabs/profile';
// import Layout from './src/tabs/layout';

// import {Entypo, Feather} from '@expo/vector-icons';

// const Tab = createMaterialBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
      
//       <Tab.Screen name="Profile" component={Profile} 
//         options={{
//           tabBarIcon: ({color, size}) => <Entypo
//             name="user"
//             size={size}
//             color={color}
//           />
//         }}
//       />
//       <Tab.Screen name="Layout" component={Layout} 
//       options={{
//         tabBarIcon: ({color, size}) => <Entypo
//           name="cog"
//           size={size}
//           color={color}
//         />
//       }}
//       />
//     </Tab.Navigator>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }


// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Main" component={MyTabs} />
//       <Drawer.Screen name="Home" component={HomeScreen} options={{}} />
//       <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//     </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }







import * as React from 'react';
import Configuracao from './src/pages/configuracao';
import Home from './src/pages/home';
import Notifica from './src/pages/notifica';
import Perfil from './src/pages/perfil';
import Login from './src/pages/login';
import Senha from './src/pages/senha';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
  <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Configuracao" component={Configuracao} />
      <Tab.Screen name="Notifica" component={Notifica} />
      <Tab.Screen name="Perfil" component={Perfil} />
  </Tab.Navigator>
  );
}

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Senha" component={Senha} />
        </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;







