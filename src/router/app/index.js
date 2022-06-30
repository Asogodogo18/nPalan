import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  FontAwesome5,
  Ionicons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
// scren
import Journal from "../../screen/journal";
import Parametre from "../../screen/parametre";
import Caisse from "../../screen/parametre";
import Encaissement from "../../screen/enregistrement/encaissement";
import Decaissement from "../../screen/enregistrement/decaissement";
import Credit from "../../screen/enregistrement/credit";
// creation des Stack
const bottom = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();
// implementation
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
      <bottom.Screen
        name="Journal"
        component={Journal}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                // top: 5,
              }}
            >
              <Ionicons
                name="journal-outline"
                size={24}
                color={focused ? "tomato" : "gray"}
              />
            </View>
          ),
        }}
      />
      <bottom.Screen
        name="Enregistrement"
        component={topBar}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                // top: 5,
              }}
            >
              <MaterialCommunityIcons
                name="cash-register"
                size={24}
                color={focused ? "tomato" : "gray"}
              />
            </View>
          ),
        }}
      />
      <bottom.Screen
        name="Caisse"
        component={Caisse}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                // top: 5,
              }}
            >
              <Entypo
                name="inbox"
                size={24}
                color={focused ? "tomato" : "gray"}
              />
            </View>
          ),
        }}
      />
      <bottom.Screen
        name="Parametre"
        component={Parametre}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                // top: 5,
              }}
            >
              <Feather
                name="settings"
                size={24}
                color={focused ? "tomato" : "gray"}
              />
            </View>
          ),
        }}
      />
    </bottom.Navigator>
  );
}

export default index;
