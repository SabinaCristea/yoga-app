import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { BackgroundImage } from "react-native-elements/dist/config";
import { useFonts } from "expo-font";
import { colors } from "../styles/colors";

const WelcomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "CG-Bold": require("../../assets/fonts/CormorantGaramond-Bold.ttf"),
    "CG-Italic": require("../../assets/fonts/CormorantGaramond-Italic.ttf"),
    "CG-Light": require("../../assets/fonts/CormorantGaramond-Light.ttf"),
    "CG-Medium": require("../../assets/fonts/CormorantGaramond-Medium.ttf"),
    "CG-Regular": require("../../assets/fonts/CormorantGaramond-Regular.ttf"),
    "CG-SemiBold": require("../../assets/fonts/CormorantGaramond-SemiBold.ttf"),
    "DND-Regular": require("../../assets/fonts/DawningofaNewDay-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <BackgroundImage
      source={require("../../assets/mountain-meditating.jpg")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.overlay}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subTitle}>to your mindful journey</Text>
        <Text style={styles.text1}>
          Discover peace and strength through mindfulness and yoga
        </Text>
        <Text style={styles.text2}>
          Embrace the present, breathe deeply, and find balance
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
    // backgroundColor: "rgba(255, 255, 255, 0.0)",
    paddingTop: 90,
    paddingHorizontal: 50,
  },
  title: {
    fontFamily: "CG-Bold",
    fontSize: 50,
    textAlign: "center",
    textTransform: "uppercase",
    color: colors.darkCharcoal,
    marginBottom: -5,
  },
  subTitle: {
    fontFamily: "CG-Regular",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 45,
    color: colors.darkCharcoal,
  },
  text1: {
    fontFamily: "DND-Regular",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 350,
    lineHeight: 40,
  },
  text2: {
    fontFamily: "DND-Regular",
    fontSize: 30,
    textAlign: "center",
    color: "white",
    lineHeight: 40,
  },
  buttonContainer: {
    // flexGrow: 1,
    marginTop: 20,
    gap: 15,
  },
  btn: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 100,
    paddingVertical: 15,
    elevation: 10,
  },
  btnText: {
    fontFamily: "CG-Bold",
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center",
    color: colors.darkCharcoal,
  },
});
