import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Journal from "../../screen/journal";
import Parametre from "../../screen/parametre";
import Caisse from "../../screen/parametre";
import Encaissement from "../../screen/enregistrement/encaissement";
import Decaissement from "../../screen/enregistrement/decaissement";
import Credit from "../../screen/enregistrement/credit";
const bottom = createBottomTabNavigator();

const Top = createMaterialTopTabNavigator();

function topBar() {
  return (
    <Top.Navigator screenOptions={{ headerShown: false }}>
      <Top.Screen name="Encaissement" component={Encaissement} />
      <Top.Screen name="Decaissement" component={Decaissement} />
      <Top.Screen name="Credit" component={Credit} />
    </Top.Navigator>
  );
}

function index() {
  return (
    <bottom.Navigator screenOptions={{ headerShown: false }}>
      <bottom.Screen name="Journal" component={Journal} />
      <bottom.Screen name="Enregistrement" component={topBar} />
      <bottom.Screen name="Caisse" component={Caisse} />
      <bottom.Screen name="Parametre" component={Parametre} />
    </bottom.Navigator>
  );
}

export default index;
