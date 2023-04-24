import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import {
  Button,
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function App() {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keybordHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log("state", state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keybordHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/123.jpg")}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 100 }}
          >
            <View style={styles.header}>
              <Text style={styles.headerTitle}>hello </Text>
              <Text style={styles.headerTitle}>welcome back</Text>
            </View>
            <View>
              <Text style={styles.inputTitle}> Email Adress</Text>
              <TextInput
                style={styles.input}
                textAlign={"center"}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.input}
                textAlign={"center"}
                secureTextEntry={true}
                value={state.password}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.btn}
              onPress={keybordHide}
            >
              <Text style={styles.btnTitle}>Sigh In</Text>
            </TouchableOpacity>
            {/* <Button title="Sigh In" /> */}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  innerBox: {
    padding: 50,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    // marginHorizontal: 20,
    borderRadius: 6,
    color: "white",
    height: 50,
  },
  form: {
    marginHorizontal: 40,
    marginBottom: 40,
  },
  inputTitle: {
    color: "white",
    fontSize: 18,
  },
  btn: {
    backgroundColor: `#1e90ff`,
    height: 40,
    borderRadius: 6,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 100,
  },
  btnTitle: {
    color: "white",
    fontSize: 14,
  },
  header: {
    alignItems: "center",
    marginBottom: 150,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
  },
});
