import React from "react";
import { Button } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/mainScreen/Home";
import CreatePostScreen from "./Screens/mainScreen/CreatePostsScreen";
import MapScreen from "./Screens/mainScreen/MapScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";
// import CommentScreen from "./Screens/mainScreen/CommentsScreen";
import { Ionicons } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
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
      <MainTab.Screen
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Press me"
              color="#FF6C00"
            />
          ),
          tabBarShowLabel: false,
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: "#FF6C00",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <MainTab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: "#FF6C00",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" size={size} color={color} />
          ),
        }}
        name="CreatePostScreen"
        component={CreatePostScreen}
      />
      {/* <MainTab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "orange",
          tabBarIcon: ({  color, size }) => (
            <Ionicons name="add-sharp" size={size} color={color} />
          ),
        }}
        name="MapScreen"
        component={MapScreen}
      /> */}
      <MainTab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: "#FF6C00",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      {/* <MainTab.Screen
      options={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "orange",
        tabBarIcon: ({  color, size }) => (
          <Ionicons name="add-sharp" size={size} color={color} />
        ),
      }}
        name="CommentScreen"
        component={CommentScreen}
      /> */}
    </MainTab.Navigator>
  );
};
