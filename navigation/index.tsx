import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View,TouchableOpacity } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Octicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors"

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
        headerStyle: {
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
          elevation: 0,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: "left",
      headerTitleStyle: {
        fontWeight:"bold"
      }
     }}>
      <Stack.Screen name="Root"
        component={BottomTabNavigator}
        options={{
          title: "WhatsApp",
          headerRight: () => {
            return(
              <View style={{ flexDirection: "row", width: 60, justifyContent: "space-between", marginRight: 10 }}>
                <TouchableOpacity>
                  <Octicons name="search" size={24} color={"white"} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <MaterialCommunityIcons name="dots-vertical" size={24} color={"white"} />
                  </TouchableOpacity>
            </View>
            ) }
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
 