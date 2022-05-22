import { View, Text, Image } from "react-native";
import React from "react";

export default function Navbar() {
  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 2,
        borderRadius: 30,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 60,
        marginTop: 20,
      }}
    >
      <View
        style={{
          margin: 20,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../assets/icon/home_idup.png")}
          style={{ height: 65, width: 65, marginRight: 70 }}
        />
        <Image
          source={require("../assets/icon/akun_mati.png")}
          style={{ height: 65, width: 65, marginLeft: 70 }}
        />
      </View>
    </View>
  );
}
