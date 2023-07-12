import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
const navigation = useNavigation()



  return (
    <View style={styles.container}>
      <Text>defaultScreen</Text>
    </View>
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
