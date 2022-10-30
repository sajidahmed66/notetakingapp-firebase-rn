import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParam } from "../../navigation/RootVanigation";
import Constants from "expo-constants";
// import styled from "styled-components/native";

type Prop = NativeStackScreenProps<RootStackParam, "AllNotes">;

const { width, height } = Dimensions.get("window");

// const Containter = styled.View`
//   flex: 1;
//   max-height: ${height}px;
//   padding-top: ${Constants.statusBarHeight}px;
// `;

// const headerHeight = useHeaderHeight();
const AllNote: React.FC<Prop> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>AllNote</Text>
      <TouchableOpacity onPress={() => navigation.navigate("AddNote")}>
        <View>
          <Text>add a note</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AllNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    hight: height,
    width: width,
    paddingTop: Constants.statusBarHeight,
    borderColor: "black",
    borderWidth: 2,
  },
});
