import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Progress from "react-native-progress";
import React from "react";
import Navbar from "../components/Navbar";
import TodaysProgress from "../components/TodaysProgress";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background/home.png")}
        style={styles.imagebg}
        resizeMode="cover"
      >
        <ScrollView>
          {/* Bagian header atas yg nama alamat */}
          <View style={{ height: 100, marginBottom: 20, marginTop: 10 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: -40,
                flexDirection: "row",
              }}
            >
              <View>
                <Image
                  source={require("../assets/defaultpp.png")}
                  style={{
                    maxHeight: 70,
                    resizeMode: "contain",
                    flex: 1,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: -40,
                  height: 70,
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    textAlign: "left",
                    flex: 1,
                  }}
                >
                  Nama
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "left",
                    flex: 1,
                  }}
                >
                  Alamat
                </Text>
              </View>
            </View>
          </View>

          {/* Body */}
          <View style={{ flex: 1 }}>
            {/* Box todays progress */}
            <TodaysProgress />

            <View
              style={{
                flexDirection: "column",
                height: 400,
                marginLeft: 40,
                marginRight: 40,
              }}
            >
              <View style={{ flex: 0.2 }}>
                <Text style={{ fontSize: 35, color: "#5A8D26" }}>Layanan</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  flex: 0.4,
                }}
              >
                <View style={{ flex: 0.33 }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Tracking")}
                  >
                    <Image
                      source={require("../assets/icon/tracking.png")}
                      style={styles.icon}
                    />
                  </TouchableOpacity>

                  <Text style={styles.iconText}>Tracking</Text>
                </View>

                <View style={{ flex: 0.33 }}>
                  <Image
                    source={require("../assets/icon/planning.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.iconText}>Planning</Text>
                </View>
                <View style={{ flex: 0.33 }}>
                  <Image
                    source={require("../assets/icon/konsul.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.iconText}>Konsultasi</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 0.4,
                }}
              >
                <View style={{ flex: 0.33 }}>
                  <Image
                    source={require("../assets/icon/makanan.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.iconText}>Makanan</Text>
                </View>
                <View style={{ flex: 0.33 }}>
                  <Image
                    source={require("../assets/icon/resto.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.iconText}>Resto</Text>
                </View>
                <View style={{ flex: 0.33 }}>
                  <Image
                    source={require("../assets/icon/resep.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.iconText}>Resep</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <Navbar navigation={navigation} currentPage={"Home"} />
      </ImageBackground>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imagebg: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    height: 40,
    left: 0,
    top: windowWidth - 40,
    width: windowHeight,
  },
  iconText: {
    textAlign: "center",
    fontSize: 20,
  },
  icon: {
    height: 120,
    resizeMode: "contain",
  },
});
