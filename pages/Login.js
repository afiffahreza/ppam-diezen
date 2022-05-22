import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background/login.png")}
        style={styles.imagebg}
        resizeMode="cover"
      >
        <View style={{ maxHeight: 200, marginBottom: 50 }}>
          <Image
            source={require("../assets/diezen.png")}
            style={{
              maxHeight: "100%",
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 30, textAlign: "center", margin: 20 }}>
            Log In
          </Text>

          <Text style={styles.inputTitle}>Email</Text>
          <View style={{ margin: 20, alignItems: "center" }}>
            <TextInput style={styles.input} placeholder="Email" />
          </View>

          <Text style={styles.inputTitle}>Password</Text>
          <View style={{ margin: 20, alignItems: "center" }}>
            <TextInput style={styles.input} placeholder="Password" />
          </View>

          <Text
            style={styles.bottomText}
            onPress={() => navigation.navigate("Register")}
          >
            Don't have an account?
          </Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 20,
              backgroundColor: "#ffb900",
              padding: 10,
              width: 400,
            }}
            onPress={() => console.log("login")}
          >
            <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 20, textAlign: "center", margin: 10 }}>
            Or
          </Text>
          <TouchableOpacity
            style={{
              borderRadius: 20,
              backgroundColor: "#58931D",
              padding: 10,
              width: 400,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
              Log In with Google
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagebg: {
    flex: 1,
    justifyContent: "center",
  },
  inputTitle: {
    fontSize: 20,
    textAlign: "left",
    marginLeft: 80,
    color: "#58931D",
  },
  bottomText: {
    fontSize: 20,
    color: "#58931D",
    marginBottom: 10,
    marginRight: 80,
    textAlign: "right",
  },
  input: {
    borderColor: "#FFE39A",
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    width: "80%",
    alignContent: "center",
  },
});
