import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const HomeIcon = ({ currentPage }) => {
  if (currentPage == "Home") {
    return (
      <Image
        source={require("../assets/icon/home_idup.png")}
        style={{ height: 65, width: 65, marginRight: 70 }}
      />
    );
  } else {
    return (
      <Image
        source={require("../assets/icon/home_mati.png")}
        style={{ height: 65, width: 65, marginRight: 70 }}
      />
    );
  }
};

const ProfileIcon = ({ currentPage }) => {
  if (currentPage == "Profile") {
    return (
      <Image
        source={require("../assets/icon/akun_idup.png")}
        style={{ height: 65, width: 65, marginLeft: 70 }}
      />
    );
  } else {
    return (
      <Image
        source={require("../assets/icon/akun_mati.png")}
        style={{ height: 65, width: 65, marginLeft: 70 }}
      />
    );
  }
};

export default function Navbar({ navigation, currentPage }) {
  return (
    <View
      style={{
        // flex: 1,
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
        marginBottom: 25,
        marginTop: 25,
        padding: 15,
      }}
    >
      <View
        style={{
          // margin: 20,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <HomeIcon currentPage={currentPage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <ProfileIcon currentPage={currentPage} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
