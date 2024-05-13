import {
  View,
  Text,
  StyleSheet,

  // BackgroundImage,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import React from "react";
import { BackgroundImage } from "react-native-elements/dist/config";
// import { TouchableOpacity } from "react-native-gesture-handler";

const WelcomeScreen = ({ navigation }) => {
  return (
    <BackgroundImage
      source={require("../../assets/mountain-meditating.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Your Mindful Journey</Text>
        <Text style={styles.text1}>
          Discover peace and strength through mindfulness and yoga.
        </Text>
        <Text style={styles.text2}>
          Embrace the present, breathe deeply, and find balance.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundImage>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    paddingTop: 80,
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 50,
  },
  text1: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
  },
  text2: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
  },

  buttonContainer: {
    marginTop: 380,
    gap: 20,
  },
  btn: {
    backgroundColor: "white",
    borderRadius: 100,
    paddingVertical: 13,
    elevation: 10,
  },
  btnText: {
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
  },
});
