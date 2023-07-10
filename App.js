import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Registration">
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
            title: "Registration",
            headerStyle: {
              height: 0,
            },
          }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            title: "Login",
            headerStyle: {
              height: 0,
            },
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
