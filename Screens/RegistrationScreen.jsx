import { StatusBar } from "expo-status-bar";
import { useState, useSyncExternalStore } from "react";

import {
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [inputStates, setInputStates] = useState({
    login: false,
    email: false,
    password: false,
  });
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
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

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/PhotoBG.jpg")}
        >
          <View>
            <Text>Картинка </Text>
          </View>
          <View
            style={{ ...styles.form, marginBottom: !isShowKeyboard ? 0 : -160 }}
          >
            <View>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Регистрация </Text>
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
                  ]}
                  placeholder="Логин"
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
                  ]}
                  placeholder="Адрес электронной почты"
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
                  ]}
                  placeholder="Пароль"
                  secureTextEntry={true}
                  value={state.password}
                  onFocus={() => handleInputFocus("password")}
                  onBlur={() => handleInputBlur("password")}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Зарегестрироваться</Text>
              </TouchableOpacity>
              <View style={styles.LoginRef}>
                <Text style={styles.LoginRefTitle}>
                  Уже есть аккаунт? Войти
                </Text>
              </View>
            </View>
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
    borderColor: "#E8E8E8",
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 8,
    height: 50,
    color: "#BDBDBD",
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: "#F6F6F6",
  },
  form: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    // position: "absolute",
  },
  // inputTitle: {
  //   color: "white",
  //   fontSize: 18,
  // },
  btn: {
    backgroundColor: `#FF6C00`,
    height: 50,
    borderRadius: 30,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 15,
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
});
