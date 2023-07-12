import React from "react";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
// import Home from "./Screens/mainScreen/Home";
import CreatePostScreen from "./Screens/mainScreen/CreatePostsScreen";
import MapScreen from "./Screens/mainScreen/MapScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";
// import CommentScreen from "./Screens/mainScreen/CommentsScreen";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

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
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor:"black",
        headerTitleAlign: "center",
      }}
    >
      <MainTab.Screen
        options={{
          title: "Публікації",
          headerRight: () => (
            <Feather
              onPress={() => alert("This is a button!")}
              name="log-out"
              size={28}
              color="#BDBDBD"
              style={{ marginRight: 16 }}
            />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="grid-outline"
              size={24}
              color={color}
              backgroundColor={focused ? "#FF6C00" : "transparent"}
              style={{
                paddingVertical: 13,
                paddingHorizontal: 30,
                borderRadius: 25,
              }}
            />
          ),
        }}
        name="Home"
        component={MapScreen}
      />
      <MainTab.Screen
        options={{
          title: "Створити публікацію",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="add"
              size={24}
              color={color}
              backgroundColor={focused ? "#FF6C00" : "transparent"}
              style={{
                paddingVertical: 13,
                paddingHorizontal: 30,
                borderRadius: 25,
              }}
            />
          ),
        }}
        name="CreatePostScreen"
        component={CreatePostScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name="person-outline"
                size={24}
                color={color}
                backgroundColor={focused ? "#FF6C00" : "transparent"}
                style={{
                  paddingVertical: 13,
                  paddingHorizontal: 30,
                  borderRadius: 25,
                }}
              />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
