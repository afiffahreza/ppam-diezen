import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SplashScreen from "./pages/SplashScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Tracking from "./pages/Tracking";
import TrackingUpdate from "./pages/TrackingUpdate";
import Planning from "./pages/Planning";
import PlanTarget from "./pages/PlanTarget";
import Profile from "./pages/Profile";
import Resto from "./pages/Resto";
import Makanan from "./pages/Makanan";

import * as firebase from "firebase";

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyC4LinMzTBupoywOB8MPvoEl5BINoUiHdw",
  authDomain: "ppam-diezen.firebaseapp.com",
  projectId: "ppam-diezen",
  storageBucket: "ppam-diezen.appspot.com",
  messagingSenderId: "491688459787",
  appId: "1:491688459787:web:b8bc79e5598cb97d0bd10e",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tracking"
          component={Tracking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrackingUpdate"
          component={TrackingUpdate}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Planning"
          component={Planning}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlanTarget"
          component={PlanTarget}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Resto"
          component={Resto}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Makanan"
          component={Makanan}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
