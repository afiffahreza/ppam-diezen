import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import TodaysProgressTrack from "../components/TodaysProgressTrack";
import * as Progress from "react-native-progress";
import Navbar from "../components/Navbar";
import firebase from "firebase";

export default function Tracking({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          console.log(snapshot.data());
          setUser(snapshot.data());
        } else {
          console.log("does not exist");
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background/home.png")}
        style={styles.imagebg}
        resizeMode="cover"
      >
        <View style={{ height: 100, marginBottom: 20 }}>
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
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image
                  source={require("../assets/icon/back.png")}
                  style={{
                    height: 40,
                    resizeMode: "contain",
                    marginLeft: 20,
                    marginTop: 5,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginLeft: -40,
              }}
            >
              <Text
                style={{
                  fontSize: 35,
                  textAlign: "left",
                  flex: 1,
                }}
              >
                Tracking
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{}}>
            <TodaysProgressTrack navigation={navigation} />
          </View>
          <View
            style={{
              // height: 400,
              marginLeft: 40,
              marginRight: 40,
            }}
          >
            <Text
              style={{
                fontSize: 35,
                color: "#5A8D26",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Last Measurement
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "white",
              marginLeft: 30,
              marginRight: 30,
              marginBottom: 10,
              marginTop: 10,
              borderRadius: 30,
              height: 220,
              shadowOffset: { width: 0, height: 0.11 },
              shadowOpacity: 0.01,
              shadowRadius: 4,
              elevation: 8,
              shadowColor: "grey",
            }}
          >
            {/* Row weight */}
            <View
              style={{
                flex: 0.2,
                marginLeft: 30,
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.8 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "#58931D",
                      fontWeight: "700",
                    }}
                  >
                    Weight
                  </Text>
                </View>
                <View style={{ flex: 0.2 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#58931D",
                      fontWeight: "700",
                      marginTop: 5,
                    }}
                  >
                    22/05/22
                  </Text>
                </View>
                {/* <View style={{ flex: 0.2 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image
                      source={require("../assets/icon/plus.png")}
                      style={{
                        height: 40,
                        resizeMode: "contain",
                        marginRight: 20,
                      }}
                    />
                  </TouchableOpacity>
                </View> */}
              </View>
            </View>
            <View
              style={{
                flex: 0.6,
                marginLeft: 30,
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.25 }}>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "#FF8A00",
                      fontWeight: "600",
                    }}
                  >
                    72.4 Kg
                  </Text>
                  <Text style={{ fontSize: 20 }}>21% Fat Mass</Text>
                </View>
                <View style={{ flex: 0.75, alignItems: "center" }}>
                  <Image
                    source={require("../assets/icon/line_chart.png")}
                    style={{ height: 80, resizeMode: "contain" }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 0.2,
                marginTop: 20,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#FFB900",
                  paddingHorizontal: 100,
                  borderRadius: 20,
                }}
                onPress={() => console.log("pindah")}
              >
                <Text style={{ fontSize: 15, color: "white" }}>
                  Track New Weight
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "white",
              margin: 30,
              borderRadius: 30,
              height: 200,
              shadowOffset: { width: 0, height: 0.11 },
              shadowOpacity: 0.01,
              shadowRadius: 4,
              elevation: 8,
              shadowColor: "grey",
            }}
          >
            {/* Row todays progress */}
            <View
              style={{
                flex: 0.3,
                marginLeft: 30,
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.8 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "#58931D",
                      fontWeight: "700",
                    }}
                  >
                    Calories
                  </Text>
                </View>
                <View style={{ flex: 0.2 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#58931D",
                      fontWeight: "700",
                      marginTop: 5,
                    }}
                  >
                    22/05/22
                  </Text>
                </View>
                {/* <View style={{ flex: 0.2 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                  <Image
                    source={require("../assets/icon/plus.png")}
                    style={{
                      height: 40,
                      resizeMode: "contain",
                      marginRight: 20,
                    }}
                  />
                </TouchableOpacity>
              </View> */}
              </View>
            </View>
            <View
              style={{
                flex: 0.7,
                marginLeft: 30,
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.25 }}>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "#FF8A00",
                      fontWeight: "600",
                    }}
                  >
                    1548 Cal
                  </Text>
                  <Text style={{ fontSize: 20, color: "green" }}>89% Goal</Text>
                </View>
                <View style={{ flex: 0.75, alignItems: "center" }}>
                  <Image
                    source={require("../assets/icon/bar_chart.png")}
                    style={{ height: 80, resizeMode: "contain" }}
                  />
                </View>
              </View>
            </View>
          </View>
          {/* <FooterNav /> */}
        </ScrollView>
        <Navbar navigation={navigation} currentPage={"Tracking"} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imagebg: {
    flex: 1,
    justifyContent: "center",
  },
});
