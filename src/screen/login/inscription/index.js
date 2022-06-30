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
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const Index = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [isSecureTextEntry, setisSecureTextEntry] = useState(false);

  return (
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
        <ScrollView contentContainerStyle={styles.content}>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setNom}
              value={nom}
              placeholder="Votre Nom"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPrenom}
              value={prenom}
              placeholder="Votre Prenom"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="Identifiant"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              onChangeText={setTel}
              value={tel}
              placeholder="Votre numero de Telephone"
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
              <Text style={styles.IndexTxt}>s'inscrire</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
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
    height: "80%",
    padding: 10,
    width: "80%",
    marginTop: 20,
    // margin: 5,
    alignSelf: "center",
    // flex: 2,
  },
  content: {
    flexGrow: 1,
    // marginHorizontal: 5,
    // paddingHorizontal: 10,

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
    marginTop: 15,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    height: 50,
    width: width / 1.15,
    backgroundColor: "orange",
    borderRadius: 8,
    letterSpacing: 2.5,
  },
  IndexTxt: {
    fontSize: 18,
    color: "white",
    fontWeight: "900",
  },
});
