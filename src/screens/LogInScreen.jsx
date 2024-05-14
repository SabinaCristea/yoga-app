import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  AppState,
} from "react-native";
import React, { useState } from "react";
import { BackgroundImage } from "react-native-elements/dist/config";
import { useFonts } from "expo-font";
import { signInWithEmail } from "../services/apiAuth";
// import { Input } from "react-native-elements";
import { supabase } from "../lib/supabase";

const WelcomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  const [fontsLoaded] = useFonts({
    "CG-Bold": require("../../assets/fonts/CormorantGaramond-Bold.ttf"),
    "CG-Regular": require("../../assets/fonts/CormorantGaramond-Regular.ttf"),
    "DND-Regular": require("../../assets/fonts/DawningofaNewDay-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  AppState.addEventListener("change", (state) => {
    if (state === "active") {
      supabase.auth.startAutoRefresh();
    } else {
      supabase.auth.stopAutoRefresh();
    }
  });

  return (
    <BackgroundImage
      source={require("../../assets/mountain-meditating.jpg")}
      style={styles.backgroundImage}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.overlay}>
          <Text style={styles.title}>welcome back</Text>

          <Text style={styles.text}>to your sanctuary</Text>

          <View style={[styles.inputContainer, { marginBottom: 20 }]}>
            <TextInput
              label="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="email@address.com"
              autoCapitalize={"none"}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              label="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              autoCapitalize={"none"}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                signInWithEmail(email, password);
              }}
              style={styles.btn}
            >
              <Text style={styles.btnText}>Log In</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 25,
            }}
          >
            <Text style={styles.registerText}>Don`t have an account yet? </Text>

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: "white",
                  fontFamily: "CG-Regular",
                  fontSize: 18,
                }}
              >
                Register here.
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </BackgroundImage>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    // resizeMode: "contain",
  },
  overlay: {
    flex: 1,
    // backgroundColor: "rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingTop: 130,
    paddingHorizontal: 50,
  },
  title: {
    fontFamily: "CG-Bold",
    fontSize: 40,
    textAlign: "center",
    textTransform: "uppercase",
    // color: "#31292f",
    color: "white",
    marginBottom: -5,
  },
  text: {
    fontFamily: "DND-Regular",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 80,
    lineHeight: 40,
    color: "white",
  },
  buttonContainer: {
    marginTop: 80,
    // marginBottom: 240,
    flexGrow: 1,
  },
  btn: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 100,
    paddingVertical: 15,
    elevation: 10,
    width: "70%",
    alignSelf: "center",
  },
  btnText: {
    fontFamily: "CG-Bold",
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 15,
    borderRadius: 100,
    elevation: 5,
  },
  registerText: {
    fontFamily: "CG-Regular",
    color: "white",
    fontSize: 18,
    textAlign: "center",
    // marginBottom: 80,
    lineHeight: 40,
  },
});
