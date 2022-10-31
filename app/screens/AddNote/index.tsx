import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import styled from "styled-components/native";
const { width, height } = Dimensions.get("window");
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../../config/firebaseConfig";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParam } from "../../navigation/RootVanigation";

const AddnoteContainer = styled.View`
  flex: 1;
  padding: 10px;
  width: ${width}px;
  justify-content: flex-start;
  background-color: "#FFF8EA";
`;

type AddnoteProps = NativeStackScreenProps<RootStackParam, "AddNote">;

const AddNote: React.FC<AddnoteProps> = ({ navigation }) => {
  const [title, setTitle] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const db = getFirestore(app);
  const addNoteHandler = async () => {
    if (title !== "" && details !== "") {
      const note = await addDoc(collection(db, "notes"), {
        title: title,
        details: details,
      })
        .then((res) => {
          setTitle("");
          setDetails("");
          navigation.replace("AllNotes");
        })
        .catch((err) => {});
    } else {
      Alert.alert("Missing Input", "Fields cannot be empty", [{ text: "OK" }]);
    }
  };

  return (
    <AddnoteContainer>
      <KeyboardAvoidingView>
        <Text style={styles.headerText}>Add Note </Text>
        <TextInput
          style={styles.titleinput}
          placeholder="enter title"
          multiline
          value={title}
          onChangeText={(e) => {
            setTitle(e);
          }}
        />
        <TextInput
          style={styles.titleinput}
          placeholder="Note Details"
          multiline
          value={details}
          onChangeText={(e) => {
            setDetails(e);
          }}
        />
        <View style={styles.btnsContainter}>
          <TouchableOpacity onPress={() => addNoteHandler()}>
            <View style={styles.addbtn}>
              <Text>Add Note</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.replace("AllNotes")}>
            <View style={styles.gobkbtn}>
              <Text>Go Back To Home</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </AddnoteContainer>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  titleinput: {
    width: "90%",
    marginHorizontal: 10,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 2,
    marginVertical: 10,
    // height: 50,
    padding: 15,
    // backgroundColor: "#FFF8EA",
  },
  headerText: {
    height: 50,
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  btnsContainter: {
    height: 75,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 12,
  },
  addbtn: {
    height: "100%",
    backgroundColor: "#90A17D",
    borderRadius: 15,
    padding: 15,
  },
  gobkbtn: {
    height: "100%",
    backgroundColor: "#FFE1E1",
    borderRadius: 15,
    padding: 15,
  },
});
