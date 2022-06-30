import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const isTablet = width > 360;

const Index = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSecureTextEntry, setisSecureTextEntry] = useState(false);

  return (
    <KeyboardAvoidingView contentContainerStyle={styles.container}>
      <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
        <ImageBackground
          style={styles.imgContainer}
          source={require("../../../../assets/bg.png")}
        >
          <View style={{ flex: 5 }}>
            <Image
              source={require("../../../../assets/logo3.png")}
              style={styles.headerImg}
            />
          </View>
          <View style={styles.content}>
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="Identifiant"
              keyboardType="email-address"
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Mot de Passe"
                keyboardType="default"
                secureTextEntry
                //secureTextEntry={isSecureTextEntry ? true : false}
              />
              {/* <TouchableOpacity
                onPress={() => setisSecureTextEntry(!isSecureTextEntry)}
              >
                {isSecureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity> */}
            </View>

            <TouchableOpacity style={styles.IndexBtn}>
              <Text style={styles.IndexTxt}>se connecter</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: height / 3.8,
              display: "flex",
              alignSelf: "center",
              paddingHorizontal: 8,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 0,
            }}
          >
            <TouchableOpacity style onPress={() => navigation.navigate("")}>
              <Text style={{ textAlign: "center" }}>Mot de Passe Oublié?</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: { flex: 1 },
  imgContainer: { width, height },
  backBtn: {
    marginTop: 40,
    height: 50,
    width: width / 6,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    borderRadius: 8,
    marginLeft: 5,
  },
  headerImg: {
    height: 90,

    width: "100%",
    // marginTop: 55,
    margin: 5,
    alignSelf: "center",
    flex: 2,
  },
  content: {
    flex: 5,
    marginHorizontal: 5,
    paddingHorizontal: 10,

    alignItems: "center",
  },

  input: {
    height: 48,
    padding: 10,
    width: width / 1.15,
    marginVertical: 10,
    paddingHorizontal: 20,
    fontSize: 15,
    backgroundColor: "white",

    elevation: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightblue",
  },
  IndexBtn: {
    marginTop: 70,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    height: 50,
    width: width / 1.15,
    backgroundColor: "orange",
    borderRadius: 8,
  },
  IndexTxt: {
    fontSize: 18,
    color: "white",
  },
});
