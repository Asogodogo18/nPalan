import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Root = createNativeStackNavigator();

import appStack from "../app";
import authStack from "../auth";
function index() {
  return (
    <Root.Navigator
      initialRouteName="authStack"
      screenOptions={{ headerShown: false }}
    >
      <Root.Screen name="authStack" component={authStack} />
      <Root.Screen name="appStack" component={appStack} />
    </Root.Navigator>
  );
}

export default index;
