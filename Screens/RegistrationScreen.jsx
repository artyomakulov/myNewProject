import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import {
  Button,
  Image,
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { StyleSheet, Text, View } from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const navigation = useNavigation();
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [inputStates, setInputStates] = useState({
    login: false,
    email: false,
    password: false,
  });
  const [state, setState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log("state", state);
    setState(initialState);
  };

  const handleInputFocus = (inputName) => {
    setIsShowKeyboard(true);
    setInputStates((prevState) => ({
      ...prevState,
      [inputName]: true,
    }));
  };

  const handleInputBlur = (inputName) => {
    setIsShowKeyboard(false);
    setInputStates((prevState) => ({
      ...prevState,
      [inputName]: false,
    }));
  };

  const getInputTextColor = (inputValue) => {
    return inputValue ? "black" : "#BDBDBD";
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/images/PhotoBG.jpg")}
        />
        <View
          style={{ ...styles.form, marginBottom: !isShowKeyboard ? 0 : -160 }}
        >
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={require("../assets/images/avatar.jpg")}
            />
            <TouchableOpacity>
              <Image
                style={styles.avatarButton}
                source={require("../assets/images/add.jpg")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Реєстрація </Text>
            </View>
            <View>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: inputStates.login
                      ? "white"
                      : styles.input.backgroundColor,
                  },
                  {
                    borderColor: inputStates.login
                      ? "#FF6C00"
                      : styles.input.borderColor,
                  },
                  {
                    color: getInputTextColor(state.login),
                  },
                ]}
                placeholder="Логін"
                onFocus={() => handleInputFocus("login")}
                onBlur={() => handleInputBlur("login")}
                value={state.login}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              />
            </View>
            <View>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: inputStates.email
                      ? "white"
                      : styles.input.backgroundColor,
                  },
                  {
                    borderColor: inputStates.email
                      ? "#FF6C00"
                      : styles.input.borderColor,
                  },
                  {
                    color: getInputTextColor(state.email),
                  },
                ]}
                placeholder="Адреса електронної пошти"
                onFocus={() => handleInputFocus("email")}
                onBlur={() => handleInputBlur("email")}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
            </View>
            <View>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: inputStates.password
                      ? "white"
                      : styles.input.backgroundColor,
                  },
                  {
                    borderColor: inputStates.password
                      ? "#FF6C00"
                      : styles.input.borderColor,
                  },
                  {
                    color: getInputTextColor(state.password),
                  },
                ]}
                placeholder="Пароль"
                secureTextEntry={!showPassword}
                value={state.password}
                onFocus={() => handleInputFocus("password")}
                onBlur={() => handleInputBlur("password")}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.showPasswordButtonText}>
                  {showPassword ? "Скрити" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.btn}
              onPress={keyboardHide}
            >
              <Text style={styles.btnTitle}>Зарєструватись</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={styles.LoginRef}>
                <Text style={styles.LoginRefTitle}>Вже є акаунт? Увійти</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
  },
  text: {
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
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    height: 50,
    color: "#BDBDBD",
    paddingLeft: 16,
    fontSize: 16,
    backgroundColor: "#F6F6F6",
  },
  form: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
  },
  btn: {
    backgroundColor: `#FF6C00`,
    height: 50,
    borderRadius: 30,
    marginTop: 23,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  btnTitle: {
    color: "white",
    fontSize: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 17,
    marginTop: 92,
  },
  headerTitle: {
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto",
  },
  LoginRef: {
    alignItems: "center",
    marginBottom: 65,
  },
  LoginRefTitle: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto",
  },
  avatarContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    transform: [{ translateY: 60 }],
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 16,
  },
  avatarButton: {
    bottom: 40,
    left: 60,
    width: 25,
    height: 25,
    backgroundColor: "white",
    borderRadius: 15,
  },
  showPasswordButton: {
    alignSelf: "flex-end",
  },
  showPasswordButtonText: {
    color: "#1B4371",
    bottom: 35,
    right: 32,
  },
});
