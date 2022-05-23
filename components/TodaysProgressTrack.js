import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";
import React from "react";

export default function TodaysProgressTrack({ navigation, user }) {
  return (
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
              Today's Progress
            </Text>
          </View>
          <View style={{ flex: 0.2 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("TrackingUpdate")}
            >
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

      {/* Row cal */}
      <View
        style={{
          flex: 0.7,
          marginLeft: 30,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.25 }}>
            <Text style={{ fontSize: 25 }}>Calories</Text>
            <Text
              style={{
                fontSize: 30,
                color: "#FF8A00",
                fontWeight: "600",
              }}
            >
              🔥1284
            </Text>
          </View>
          <View style={{ flex: 0.25, alignItems: "center" }}>
            <Progress.Circle
              size={100}
              progress={0.3}
              thickness={10}
              color={"#9B52AD"}
              textStyle={{ fontSize: 15 }}
              showsText={true}
              formatText={(progress) => `Carb ${Math.round(progress * 100)}%`}
            />
          </View>
          <View style={{ flex: 0.25, alignItems: "center" }}>
            <Progress.Circle
              size={100}
              progress={0.4}
              thickness={10}
              showsText={true}
              color={"#3585FE"}
              textStyle={{ fontSize: 15 }}
              formatText={(progress) => `Prot ${Math.round(progress * 100)}%`}
            />
          </View>
          <View style={{ flex: 0.25, alignItems: "center" }}>
            <Progress.Circle
              size={100}
              progress={0.6}
              thickness={10}
              showsText={true}
              color={"#FEC635"}
              textStyle={{ fontSize: 15 }}
              formatText={(progress) => `Fat ${Math.round(progress * 100)}%`}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
