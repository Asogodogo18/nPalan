import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../../screen/login/onboarding";
import Connexion from "../../screen/login/connexion";
import Inscription from "../../screen/login/inscription";
import Ecran from "../../screen/login/Ecran";

const Stack = createNativeStackNavigator();

function index() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Ecran" component={Ecran} />

      <Stack.Screen name="Connexion" component={Connexion} />
      <Stack.Screen name="Inscription" component={Inscription} />
    </Stack.Navigator>
  );
}

export default index;
