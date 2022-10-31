import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as React from "react";
import AddNote from "../screens/AddNote";
import AllNote from "../screens/AllNotes";
import Login from "../screens/LogIn";
import Register from "../screens/Register";
import ViewNote from "../screens/ViewNote";

//

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export type RootStackParam = {
  AllNotes: undefined;
  AddNote: undefined;
  ViewNote: undefined | any;
  Login: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParam>();

const RootNavigator = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator>
      <Screen name="AllNotes" component={AllNote} />
      <Screen
        name="ViewNote"
        component={ViewNote}
        options={({ route }) => ({ title: route.params?.note?.title })}
      />
      <Screen name="AddNote" component={AddNote} />
    </Navigator>
  );
};
