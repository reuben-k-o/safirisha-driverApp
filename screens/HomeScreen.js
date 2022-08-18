import { StyleSheet, Text, View, Dimensions } from "react-native";
import { colors, parameters } from "../global/styles";

import { StatusBar } from "expo-status-bar";
import Button from "../components/Button";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

function HomeScreen({ navigation }) {
  function loginHandler() {
    navigation.navigate("Login");
  }
  function signUpHandler() {
    navigation.navigate("Signup");
  }
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.text}>Welcome to Safirisha Driver App</Text>

        <View style={styles.buttons}>
          <Button onPress={loginHandler}>Login</Button>
          <Button onPress={signUpHandler}>Sign Up</Button>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: "#63cb72",
    height: SCREEN_HEIGHT / 2,
    width: "100%",
    marginTop: "100%",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "30%",
  },

  image: {
    marginTop: 40,
    flex: 1,
    justifyContent: "center",
  },
  text: {
    padding: 3,
    color: "white",
    fontSize: 42,
    marginTop: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,

    fontWeight: "bold",
  },
});
