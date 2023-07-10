import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/mainScreen/Home";
import CreatePostScreen from "./Screens/mainScreen/CreatePostsScreen";
import MapScreen from "./Screens/mainScreen/MapScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";
import CommentScreen from "./Screens/mainScreen/CommentsScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
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
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Home" component={Home} />
      <MainTab.Screen name="CreatePostScreen" component={CreatePostScreen} />
      <MainTab.Screen name="MapScreen" component={MapScreen} />
      <MainTab.Screen name="ProfileScreen" component={ProfileScreen} />
      <MainTab.Screen name="CommentScreen" component={CommentScreen} />
    </MainTab.Navigator>
  );
};

export default function App() {
  const routing = useRoute({});

  return <NavigationContainer>{routing}</NavigationContainer>;
}
