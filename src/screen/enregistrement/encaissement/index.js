import { StyleSheet, Text, View } from "react-native";
import React from "react";

const index = () => {
  return (
    <View style={styles.contain}>
      <Text>encaissement Screen</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
