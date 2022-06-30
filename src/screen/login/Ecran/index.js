import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("screen");
const Index = () => {
  return (
    <View style={styles.contain}>
      <View style={styles.section1}>
        <Image
          source={require("../../../../assets/logo3.png")}
          resizeMode="contain"
          style={styles.img}
        />
      </View>
      <View style={styles.section2}>
        <Text>Bienvenue sur votre PlatForm de gestion Budgetaire</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Text>Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  section1: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  section2: {
    flex: 4,
    backgroundColor: "orange",
    width: width - 10,
    alignSelf: "center",
    elevation: 5,
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
    marginBottom: 30,
    borderRadius: 50,
  },
  img: {
    height: "100%",
    width: "100%",
    marginTop: 50,
  },
});
