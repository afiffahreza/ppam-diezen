import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Progress from "react-native-progress";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import RadioForm from "react-native-simple-radio-button";
import firebase from "firebase";

export default function Profile({ navigation }) {
  const [user, setUser] = useState(null);
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [exercise, setExercise] = useState("");
  const [allergies, setAllergies] = useState("");
  const [diseases, setDiseases] = useState("");

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
          setAllergies(snapshot.data().allergies);
          setDiseases(snapshot.data().diseases);
          setExercise(snapshot.data().exercise);
          setBirthdate(snapshot.data().birthdate);
          setHeight(snapshot.data().height);
          setWeight(snapshot.data().weight);
          setType(snapshot.data().targetType);
        } else {
          console.log("does not exist");
        }
      });
  }, []);

  const onUpdate = () => {
    setUser({
      ...user,
      gender: type,
      weight,
      height,
      birthdate,
      exercise,
      allergies,
      diseases,
    });
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        ...user,
        gender: type,
        weight: weight,
        height: height,
        birthdate: birthdate,
        allergies: allergies,
        exercise: exercise,
        diseases: diseases,
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background/home.png")}
        style={styles.imagebg}
        resizeMode="cover"
      >
        <ScrollView>
          {/* Bagian header atas yg nama alamat */}
          <View style={{ height: 200, marginBottom: 20, marginTop: 10 }}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <View>
                <Image
                  source={require("../assets/defaultpp.png")}
                  style={{
                    maxHeight: 80,
                    resizeMode: "contain",
                    marginBottom: 10,
                  }}
                />
              </View>
              <View
                style={{
                  height: 70,
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    textAlign: "center",
                  }}
                >
                  {user ? user.name : "Loading"}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong
                </Text>
              </View>
            </View>
          </View>

          {/* Body */}
          <View style={{ flex: 1 }}>
            {/* Box */}
            <View
              style={{
                flexDirection: "column",
                backgroundColor: "white",
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 10,
                marginTop: 10,
                borderRadius: 30,
                height: 1000,
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
                  flex: 0.05,
                  marginLeft: 30,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    color: "#58931D",
                  }}
                >
                  Personal Information
                </Text>
              </View>

              {/* w */}
              <View
                style={{
                  flex: 0.125,
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
                  Weight
                </Text>
                <View>
                  <TextInput
                    style={styles.input}
                    defaultValue={user ? user.weight : "0"}
                    onChangeText={(text) => setWeight(text)}
                  />
                </View>
              </View>

              {/* h */}
              <View
                style={{
                  flex: 0.125,
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
                  Height
                </Text>
                <View>
                  <TextInput
                    style={styles.input}
                    defaultValue={user ? user.height : "0"}
                    onChangeText={(text) => setHeight(text)}
                  />
                </View>
              </View>

              {/* bd */}
              <View
                style={{
                  flex: 0.125,
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
                  Birth Date
                </Text>
                <View>
                  <TextInput
                    style={styles.input}
                    defaultValue={user ? user.birthdate : "0"}
                    onChangeText={(text) => setBirthdate(text)}
                  />
                </View>
              </View>

              {/* Radio */}
              <View
                style={{
                  flex: 0.125,
                  marginLeft: 30,
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    color: "black",
                  }}
                >
                  Gender
                </Text>
                <RadioForm
                  radio_props={[
                    { label: "Male			", value: "male" },
                    { label: "Female", value: "Female" },
                  ]}
                  initial={0}
                  formHorizontal={true}
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

              {/* weekly exercise */}
              <View
                style={{
                  flex: 0.125,
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
                  Weekly Exercise
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 0.4 }}>
                    <TextInput
                      style={styles.input}
                      defaultValue={user ? user.exercise : "0"}
                      onChangeText={(text) => setExercise(text)}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      marginLeft: 20,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>Times per Week</Text>
                  </View>
                </View>
              </View>

              {/* allergy */}
              <View
                style={{
                  flex: 0.125,
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
                  Allergy
                </Text>
                <View>
                  <TextInput
                    style={styles.input}
                    defaultValue={user ? user.allergies : "0"}
                    onChangeText={(text) => setAllergies(text)}
                  />
                </View>
              </View>

              {/* hereditary disease */}
              <View
                style={{
                  flex: 0.125,
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
                  Hereditary Disease
                </Text>
                <View>
                  <TextInput
                    style={styles.input}
                    defaultValue={user ? user.diseases : "0"}
                    onChangeText={(text) => setDiseases(text)}
                  />
                </View>
              </View>

              {/* Save Button */}
              <View
                style={{
                  flex: 0.075,
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
                  onPress={() => onUpdate()}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 20,
                      textAlign: "center",
                    }}
                  >
                    Update
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <Navbar navigation={navigation} currentPage={"Profile"} />
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
  input: {
    borderColor: "#FFE39A",
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    width: "100%",
    alignContent: "center",
  },
});
