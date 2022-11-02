import { HeaderBackground } from "@react-navigation/elements";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as React from "react";
import AddNote from "../screens/AddNote";
import AllNote from "../screens/AllNotes";
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
};

const Stack = createNativeStackNavigator<RootStackParam>();

const RootNavigator = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator>
      <Screen
        name="AllNotes"
        component={AllNote}
        options={{
          headerTitleAlign: "center",
          headerTintColor: "#E7F6F2",
          headerBackground: () => (
            <HeaderBackground style={{ backgroundColor: "#474E68" }} />
          ),
        }}
      />
      <Screen
        name="ViewNote"
        component={ViewNote}
        options={({ route }) => ({
          title: route.params?.note?.title,
          headerTitleAlign: "center",
          headerTintColor: "#E7F6F2",
          headerBackground: () => (
            <HeaderBackground style={{ backgroundColor: "#474E68" }} />
          ),
        })}
      />
      <Screen
        name="AddNote"
        component={AddNote}
        options={{
          headerTitleAlign: "center",
          headerTintColor: "#E7F6F2",
          headerBackground: () => (
            <HeaderBackground style={{ backgroundColor: "#474E68" }} />
          ),
        }}
      />
    </Navigator>
  );
};
