import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import Navbar from "../components/Navbar";

export default function Resto({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ImageBackground
          source={require("../assets/background/resto.png")}
          style={styles.imageStyle}
        ></ImageBackground>
      </ScrollView>
      <Navbar navigation={navigation} currentPage={"Resto"} />
    </View>
  );
}

const win = Dimensions.get("window");
const ratio = win.width / 1440; //541 is actual image width

const styles = StyleSheet.create({
  imageStyle: {
    width: win.width,
    height: 3239 * ratio, //362 is actual height of image
  },
});
