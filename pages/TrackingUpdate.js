import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const TextOtomatis = ({ mode }) => {
  if (mode === "otomatis") {
    return <Text style={styles.topTextActive}>Otomatis</Text>;
  } else {
    return <Text style={styles.topText}>Otomatis</Text>;
  }
};

const TextManual = ({ mode }) => {
  if (mode === "manual") {
    return <Text style={styles.topTextActive}>Manual</Text>;
  } else {
    return <Text style={styles.topText}>Manual</Text>;
  }
};

const Deskripsi = ({ mode }) => {
  if (mode === "otomatis") {
    return (
      <View style={{ width: 300, alignSelf: "center" }}>
        <Text style={styles.desc}>
          Pilih makananmu hari ini, informasi akan terisi otomatis
        </Text>
      </View>
    );
  } else
    return (
      <View style={{ width: 350, alignSelf: "center" }}>
        <Text style={styles.desc}>
          Masukkan informasi makananmu hari ini secara manual
        </Text>
      </View>
    );
};

const FormTracker = ({ mode }) => {
  if (mode === "manual") {
    return (
      <View>
        <Text style={styles.inputTitle}>Nama Makanan</Text>
        <View style={{ margin: 10, alignItems: "center" }}>
          <TextInput style={styles.input} placeholder="Nama Makanan" />
        </View>

        <Text style={styles.inputTitle}>Calories</Text>
        <View style={{ margin: 10, alignItems: "center" }}>
          <TextInput style={styles.input} placeholder="Calories" />
        </View>

        <Text style={styles.inputTitle}>Carbo</Text>
        <View style={{ margin: 10, alignItems: "center" }}>
          <TextInput style={styles.input} placeholder="Carbo" />
        </View>

        <Text style={styles.inputTitle}>Protein</Text>
        <View style={{ margin: 10, alignItems: "center" }}>
          <TextInput style={styles.input} placeholder="Protein" />
        </View>

        <Text style={styles.inputTitle}>Fat</Text>
        <View style={{ margin: 10, alignItems: "center" }}>
          <TextInput style={styles.input} placeholder="Fat" />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#FFB900",
            borderRadius: 20,
            marginHorizontal: 100,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
              padding: 10,
            }}
          >
            Tambah
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else
    return (
      <View>
        <Text style={styles.inputTitle}>Nama Makanan</Text>
        <View style={{ margin: 10, alignItems: "center" }}>
          <TextInput style={styles.input} placeholder="Nama Makanan" />
        </View>

        <Text style={styles.inputTitle}>Calories</Text>
        <View style={{ margin: 10, alignItems: "center" }}>
          <TextInput
            editable={false}
            style={styles.inputDisabled}
            placeholder="Calories"
          />
        </View>

        <Text style={styles.inputTitle}>Carbo</Text>
        <View style={{ margin: 10, alignItems: "center" }}>
          <TextInput
            editable={false}
            style={styles.inputDisabled}
            placeholder="Carbo"
          />
        </View>

        <Text style={styles.inputTitle}>Protein</Text>
        <View style={{ margin: 10, alignItems: "center" }}>
          <TextInput
            editable={false}
            style={styles.inputDisabled}
            placeholder="Protein"
          />
        </View>

        <Text style={styles.inputTitle}>Fat</Text>
        <View style={{ margin: 10, alignItems: "center" }}>
          <TextInput
            editable={false}
            style={styles.inputDisabled}
            placeholder="Fat"
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#FFB900",
            borderRadius: 20,
            marginHorizontal: 100,
            marginTop: 20,
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Tambah
          </Text>
        </TouchableOpacity>
      </View>
    );
};

export default function TrackingUpdate({ navigation }) {
  const [mode, setMode] = useState("otomatis");
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
              <TouchableOpacity onPress={() => navigation.navigate("Tracking")}>
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
                Update Progress
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "white",
              marginLeft: 30,
              marginRight: 30,
              marginBottom: 10,
              marginTop: 10,
              borderRadius: 30,
              height: 800,
              shadowOffset: { width: 0, height: 0.11 },
              shadowOpacity: 0.01,
              shadowRadius: 4,
              elevation: 8,
              shadowColor: "grey",
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 0.5 }}>
                  <TouchableOpacity
                    onPress={() => {
                      setMode("otomatis");
                    }}
                  >
                    <TextOtomatis mode={mode} />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 0.5 }}>
                  <TouchableOpacity
                    onPress={() => {
                      setMode("manual");
                    }}
                  >
                    <TextManual mode={mode} />
                  </TouchableOpacity>
                </View>
              </View>

              <Deskripsi mode={mode} />

              <FormTracker mode={mode} />
            </View>
          </View>
        </ScrollView>
        <Navbar navigation={navigation} currentPage={"TrackingUpdate"} />
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
  inputTitle: {
    fontSize: 20,
    textAlign: "left",
    marginLeft: 60,
    color: "#58931D",
  },
  topText: {
    fontSize: 25,
    textAlign: "center",
    margin: 15,
    color: "grey",
  },
  topTextActive: {
    fontSize: 25,
    textAlign: "center",
    margin: 15,
    color: "#58931D",
    textDecorationLine: "underline",
  },
  bottomText: {
    fontSize: 20,
    color: "#58931D",
    marginTop: 20,
    textAlign: "center",
  },
  inputDisabled: {
    backgroundColor: "#D1D1D1",
    borderColor: "#9D9D9D",
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    width: "80%",
    alignContent: "center",
  },
  input: {
    borderColor: "#FFE39A",
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    width: "80%",
    alignContent: "center",
  },
  desc: {
    fontSize: 20,
    textAlign: "center",
    margin: 15,
    color: "grey",
  },
});
