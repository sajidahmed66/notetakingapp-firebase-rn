import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParam } from "../../navigation/RootVanigation";
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
type viewNoteProps = NativeStackScreenProps<RootStackParam, "ViewNote">;

const ViewNote: React.FC<viewNoteProps> = ({ route, navigation }) => {
  const note = route.params?.note;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Note Details</Text>
      <View style={styles.cardContainer}>
        <Text>{note?.details}</Text>
      </View>
      <TouchableOpacity
        style={styles.gobkbtn}
        onPress={() => navigation.replace("AllNotes")}
      >
        <Ionicons name="chevron-back" size={25} color="whote" />
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewNote;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: "#FFF8EA",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 30,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  gobkbtn: {
    height: 55,
    width: 120,
    padding: 15,
    backgroundColor: "#7D6E83",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  cardContainer: {
    backgroundColor: "#DFD3C3",
    width: "100%",
    maxHeight: "auto",
    height: 200,
    marginVertical: 15,
    padding: 15,
    borderRadius: 15,
  },
});
