import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import RadioForm from "react-native-simple-radio-button";
import firebase from "firebase";

export default function PlanTarget({ navigation }) {
  const [type, setType] = useState("Ideal BMI");
  const [weightTarget, setWeightTarget] = useState(0);
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

  const onSave = () => {
    console.log(user);
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        ...user,
        targetType: type,
        targetWeight: weightTarget,
      });
    navigation.navigate("Home");
    // console.log(weightTarget);
    // console.log(type);
    // navigation.navigate("Home");
  };

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
                <TouchableOpacity
                  onPress={() => navigation.navigate("Planning")}
                >
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
                  Planning Target
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
              height: 500,
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
                flex: 0.1,
                marginLeft: 30,
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.3 }}>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "#58931D",
                      fontWeight: "700",
                    }}
                  >
                    Edit Target
                  </Text>
                </View>
              </View>
            </View>

            {/* Radio */}
            <View
              style={{
                flex: 0.35,
                marginLeft: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "black",
                }}
              >
                Type
              </Text>
              <RadioForm
                radio_props={[
                  { label: "Ideal BMI", value: "Ideal BMI" },
                  { label: "Lose Weight", value: "Lose Weight" },
                  { label: "Gain Weight", value: "Gain Weight" },
                ]}
                initial={type}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={"black"}
                selectedButtonColor={"#58931D"}
                accessibilityLabel={"radio-button"}
                animation={true}
                labelStyle={{ fontSize: 20 }}
                style={{ marginTop: 10 }}
                onPress={(value) => {
                  setType(value);
                }}
              />
            </View>

            {/* Target weight */}
            <View
              style={{
                flex: 0.3,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "black",
                }}
              >
                Weight Target
              </Text>
              <View style={{}}>
                <TextInput
                  style={styles.input}
                  placeholder="Weight"
                  onChangeText={(text) => setWeightTarget(text)}
                />
              </View>
            </View>

            {/* Save Button */}
            <View
              style={{
                flex: 0.1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 20,
                  backgroundColor: "#ffb900",
                  padding: 10,
                  width: 400,
                }}
                onPress={() => onSave()}
              >
                <Text
                  style={{ color: "white", fontSize: 20, textAlign: "center" }}
                >
                  Save
                </Text>
              </TouchableOpacity>
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
  input: {
    borderColor: "grey",
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    width: "100%",
    alignContent: "center",
  },
});
