import React, { useEffect } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
      clearTimeout();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background/splash.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Image
          source={require("../assets/diezen.png")}
          style={{ maxHeight: 200, resizeMode: "contain" }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
