import { View, Text } from "react-native";
import * as Progress from "react-native-progress";
import React, { useEffect, useState } from "react";
import firebase from "firebase";

export default function TodaysProgress() {
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
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "white",
        margin: 30,
        borderRadius: 30,
        height: 300,
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
          flex: 0.2,
          marginLeft: 30,
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.5 }}>
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
          <View style={{ flex: 0.5 }}>
            <Text
              style={{
                fontSize: 20,
                color: "#1F73F1",
                fontWeight: "600",
                textAlign: "right",
                marginRight: 40,
                marginTop: 6,
                textDecorationLine: "underline",
              }}
            >
              View More
            </Text>
          </View>
        </View>
      </View>

      {/* Row cal */}
      <View
        style={{
          flex: 0.4,
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
              🔥{user ? user.calories : 0}
            </Text>
          </View>
          <View style={{ flex: 0.25, alignItems: "center" }}>
            <Progress.Circle
              size={100}
              progress={
                user ? parseInt(user.carbs) / parseInt(user.targetCarbs) : 0
              }
              thickness={10}
              color={"#9B52AD"}
              textStyle={{ fontSize: 15 }}
              showsText={true}
              formatText={(progress) =>
                progress ? `Carb ${Math.round(progress * 100)}%` : `Carb 0%`
              }
            />
          </View>
          <View style={{ flex: 0.25, alignItems: "center" }}>
            <Progress.Circle
              size={100}
              progress={
                user ? parseInt(user.protein) / parseInt(user.targetProtein) : 0
              }
              thickness={10}
              showsText={true}
              color={"#3585FE"}
              textStyle={{ fontSize: 15 }}
              formatText={(progress) =>
                progress ? `Prot ${Math.round(progress * 100)}%` : `Prot 0%`
              }
            />
          </View>
          <View style={{ flex: 0.25, alignItems: "center" }}>
            <Progress.Circle
              size={100}
              progress={
                user ? parseInt(user.fat) / parseInt(user.targetFat) : 0
              }
              thickness={10}
              showsText={true}
              color={"#FEC635"}
              textStyle={{ fontSize: 15 }}
              formatText={(progress) =>
                progress ? `Fat ${Math.round(progress * 100)}%` : `Fat 0%`
              }
            />
          </View>
        </View>
      </View>

      {/* Row target */}
      <View
        style={{
          flex: 0.4,
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            fontSize: 20,
            color: "#58931D",
            marginBottom: 10,
            fontWeight: "700",
          }}
        >
          Your Target
        </Text>
        <Progress.Bar
          progress={user ? user.calories / parseInt(user.targetCalories) : 0}
          width={480}
          height={20}
          color="#FF8A00"
          borderRadius={20}
          style={{ alignSelf: "center" }}
        />
      </View>
    </View>
  );
}
