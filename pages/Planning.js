import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import TodaysProgressTrack from "../components/TodaysProgressTrack";
import * as Progress from "react-native-progress";
import Navbar from "../components/Navbar";

export default function Planning({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background/planning.png")}
        style={styles.imagebg}
        resizeMode="cover"
      >
        <ScrollView>
          <View style={{ height: 80, marginBottom: 20 }}>
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
                  Planning
                </Text>
              </View>
            </View>
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
              height: 300,
              shadowOffset: { width: 0, height: 0.11 },
              shadowOpacity: 0.01,
              shadowRadius: 4,
              elevation: 8,
              shadowColor: "grey",
            }}
          >
            {/* Judul target */}
            <View
              style={{
                flex: 0.2,
                marginLeft: 30,
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.3 }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "#58931D",
                      fontWeight: "700",
                    }}
                  >
                    Your Target
                  </Text>
                </View>
                <View style={{ flex: 0.55 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#FF6305",
                      fontWeight: "600",
                      marginTop: 5,
                    }}
                  >
                    55%
                  </Text>
                </View>
                <View style={{ flex: 0.15 }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("PlanTarget")}
                  >
                    <Image
                      source={require("../assets/icon/editpen.png")}
                      style={{
                        height: 30,
                        resizeMode: "contain",
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Bar */}
            <View
              style={{
                flex: 0.2,
                marginTop: 20,
              }}
            >
              <Progress.Bar
                progress={0.55}
                width={480}
                height={20}
                color="#FF8A00"
                borderRadius={20}
                style={{ alignSelf: "center" }}
              />
            </View>

            {/* detail score */}
            <View
              style={{
                flex: 0.2,
                marginLeft: 30,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.7 }}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: "#757575",
                      fontWeight: "700",
                    }}
                  >
                    Your BMI Score
                  </Text>
                </View>
                <View style={{ flex: 0.3 }}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: "#FF3D00",
                      textAlign: "right",
                      marginRight: 30,
                      fontWeight: "700",
                    }}
                  >
                    22.3
                  </Text>
                </View>
              </View>
            </View>

            {/* detail type */}
            <View
              style={{
                flex: 0.2,
                marginLeft: 30,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.7 }}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: "#757575",
                      fontWeight: "700",
                    }}
                  >
                    Type
                  </Text>
                </View>
                <View style={{ flex: 0.3 }}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: "black",
                      textAlign: "right",
                      marginRight: 30,
                      fontWeight: "700",
                    }}
                  >
                    Ideal BMI
                  </Text>
                </View>
              </View>
            </View>

            {/* weight target */}
            <View
              style={{
                flex: 0.2,
                marginLeft: 30,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.7 }}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: "#757575",
                      fontWeight: "700",
                    }}
                  >
                    Weight Target
                  </Text>
                </View>
                <View style={{ flex: 0.3 }}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: "black",
                      textAlign: "right",
                      fontWeight: "700",
                      marginRight: 30,
                    }}
                  >
                    65
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              backgroundColor: "white",
              margin: 30,
              borderRadius: 30,
              height: 250,
              shadowOffset: { width: 0, height: 0.11 },
              shadowOpacity: 0.01,
              shadowRadius: 4,
              elevation: 8,
              shadowColor: "grey",
            }}
          >
            {/* judul */}
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
                    Activity Planning
                  </Text>
                </View>
                <View style={{ flex: 0.2 }}>
                  <TouchableOpacity onPress={() => console.log("act")}>
                    <Image
                      source={require("../assets/icon/plus.png")}
                      style={{
                        height: 40,
                        resizeMode: "contain",
                        marginRight: 20,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* detail */}
            <View
              style={{
                flex: 0.15,
                marginLeft: 30,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.4 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "grey",
                      fontWeight: "600",
                    }}
                  >
                    Today's Planning
                  </Text>
                </View>
                <View style={{ flex: 0.2 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "grey",
                      fontWeight: "600",
                    }}
                  >
                    22/05/22
                  </Text>
                </View>
              </View>
            </View>

            {/* act */}
            <View
              style={{
                flex: 0.55,
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.25 }}>
                  <Image
                    source={require("../assets/icon/run.png")}
                    style={{
                      height: 80,
                      resizeMode: "contain",
                      marginLeft: -20,
                    }}
                  />
                </View>
                <View style={{ flex: 0.5 }}>
                  <Text style={{ fontSize: 20 }}>Running</Text>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "#FF8A00",
                      fontWeight: "600",
                    }}
                  >
                    652 KCal
                  </Text>
                </View>
                <View style={{ flex: 0.25 }}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    🕛16.00
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              backgroundColor: "white",
              margin: 30,
              borderRadius: 30,
              height: 500,
              shadowOffset: { width: 0, height: 0.11 },
              shadowOpacity: 0.01,
              shadowRadius: 4,
              elevation: 8,
              shadowColor: "grey",
            }}
          >
            {/* judul */}
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
                    Food Planning
                  </Text>
                </View>
                <View style={{ flex: 0.2 }}>
                  <TouchableOpacity onPress={() => console.log("act")}>
                    <Image
                      source={require("../assets/icon/plus.png")}
                      style={{
                        height: 40,
                        resizeMode: "contain",
                        marginRight: 20,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* detail */}
            <View
              style={{
                flex: 0.15,
                marginLeft: 30,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.4 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "grey",
                      fontWeight: "600",
                    }}
                  >
                    Today's Planning
                  </Text>
                </View>
                <View style={{ flex: 0.2 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "grey",
                      fontWeight: "600",
                    }}
                  >
                    22/05/22
                  </Text>
                </View>
              </View>
            </View>

            {/* food */}
            <View
              style={{
                flex: 0.55,
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.25 }}>
                  <Image
                    source={require("../assets/icon/salad.png")}
                    style={{
                      height: 80,
                      resizeMode: "contain",
                      marginLeft: -20,
                    }}
                  />
                </View>
                <View style={{ flex: 0.5 }}>
                  <Text style={{ fontSize: 20 }}>Salad</Text>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "#FF8A00",
                      fontWeight: "600",
                    }}
                  >
                    423 KCal
                  </Text>
                </View>
                <View style={{ flex: 0.25 }}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    Breakfast
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 0.55,
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.25 }}>
                  <Image
                    source={require("../assets/icon/chicken.png")}
                    style={{
                      height: 80,
                      resizeMode: "contain",
                      marginLeft: -20,
                    }}
                  />
                </View>
                <View style={{ flex: 0.5 }}>
                  <Text style={{ fontSize: 20 }}>Chicken Roasted</Text>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "#FF8A00",
                      fontWeight: "600",
                    }}
                  >
                    960 KCal
                  </Text>
                </View>
                <View style={{ flex: 0.25 }}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    Lunch
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 0.55,
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.25 }}>
                  <Image
                    source={require("../assets/icon/pancake.png")}
                    style={{
                      height: 80,
                      resizeMode: "contain",
                      marginLeft: -20,
                    }}
                  />
                </View>
                <View style={{ flex: 0.5 }}>
                  <Text style={{ fontSize: 20 }}>Pancake</Text>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "#FF8A00",
                      fontWeight: "600",
                    }}
                  >
                    472 KCal
                  </Text>
                </View>
                <View style={{ flex: 0.25 }}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    Dinenr
                  </Text>
                </View>
              </View>
            </View>
          </View>
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
