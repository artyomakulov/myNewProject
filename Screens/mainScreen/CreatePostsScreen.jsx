import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function CreatePostScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.photoBox}></View>
      <View>
        <Text style={styles.photoBoxText}>Завантажте фото</Text>
      </View>
      <TextInput placeholder="Назва..." style={styles.postTitle}></TextInput>
      <View>
        <TouchableOpacity>
          <View>
            <Feather
              name="map-pin"
              size={24}
              color={"#BDBDBD"}
              style={styles.iconLocation}
            />
            <TextInput
              placeholder="Місцевість..."
              style={styles.postLocation}
            ></TextInput>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          // onPress={sendPhoto}
          style={styles.createPostBtn}
        >
          <Text style={styles.buttonTitle}>Опублікувати</Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  photoBox: {
    alignSelf: "center",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 240,
    width: "80%",
    marginTop: 32,
    borderRadius: 8,
    marginBottom: 8,
    marginHorizontal: "auto",
  },
  photoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 240,
    width: 310,
    borderRadius: 10,
  },
  photoBoxIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    opacity: 0.3,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  camera: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  flipContainer: {
    position: "absolute",
    bottom: 8,
    right: 8,
    borderRadius: 8,
    borderColor: "#fff",
    borderWidth: 1,
    padding: 5,
    // color: "#FF0000",
  },
  flipText: {
    color: "#f00",
    fontSize: 10,
    lineHeight: 12,
  },
  photoBoxText: {
    alignSelf: "center",
    width: "80%",
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "400",
  },
  postTitle: {
    height: 50,
    color: "#BDBDBD",
    width: "80%",
    alignSelf: "center",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    marginTop: 32,
  },
  postLocation: {
    height: 50,
    color: "#BDBDBD",
    width: "80%",
    alignSelf: "center",
    marginTop: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    paddingStart: 28,
  },
  createPostBtn: {
    marginTop: 32,
    alignSelf: "center",
    width: "80%",
    backgroundColor: "#F6F6F6",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  iconLocation: {
    position: "absolute",
    top: 30,
    left: 38,
  },
  buttonTitle: {
    color: "#BDBDBD",
  },
});
