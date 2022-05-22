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

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background/login.png")}
        style={styles.imagebg}
        resizeMode="cover"
      >
        <View>
          <Text style={{ fontSize: 30, textAlign: "center", margin: 20 }}>
            Sign Up
          </Text>

          <Text style={styles.inputTitle}>Email</Text>
          <View style={{ margin: 20, alignItems: "center" }}>
            <TextInput style={styles.input} placeholder="Email" />
          </View>

          <Text style={styles.inputTitle}>Name</Text>
          <View style={{ margin: 20, alignItems: "center" }}>
            <TextInput style={styles.input} placeholder="Name" />
          </View>

          <Text style={styles.inputTitle}>Password</Text>
          <View style={{ margin: 20, alignItems: "center" }}>
            <TextInput style={styles.input} placeholder="Password" />
          </View>

          <Text style={styles.inputTitle}>Confirm Password</Text>
          <View style={{ margin: 20, alignItems: "center" }}>
            <TextInput style={styles.input} placeholder="Password" />
          </View>
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
            onPress={() => console.log("signup")}
          >
            <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={styles.bottomText}
            onPress={() => navigation.navigate("Login")}
          >
            Already have an account? Login here.
          </Text>
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
    marginTop: 20,
    textAlign: "center",
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
