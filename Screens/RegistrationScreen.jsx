import { StatusBar } from "expo-status-bar";
import { useState } from "react";

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
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log("state", state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/PhotoBG.jpg")}
        >
          <View
            style={{ ...styles.form, marginBottom: !isShowKeyboard ? 0 : -160 }}
          >
            <View>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Регистрация </Text>
              </View>
              <View>
                {/* <Text style={styles.inputTitle}>Логин</Text> */}
                <TextInput
                  style={styles.input}
                  placeholder="Логин"
                  onFocus={() => setIsShowKeyboard(true)}
                  onBlur={() => setIsShowKeyboard(false)}
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                />
              </View>
              <View>
                {/* <Text style={styles.inputTitle}>Адрес электронной почты</Text> */}
                <TextInput
                  style={styles.input}
                  placeholder="Адрес электронной почты"
                  onFocus={() => setIsShowKeyboard(true)}
                  onBlur={() => setIsShowKeyboard(false)}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View>
                {/* <Text style={styles.inputTitle}>Пароль</Text> */}
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  secureTextEntry={true}
                  value={state.password}
                  onFocus={() => setIsShowKeyboard(true)}
                  onBlur={() => setIsShowKeyboard(false)}
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
