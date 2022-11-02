import React, { useState } from "react";
import {
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../../config/firebaseConfig";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParam } from "../../navigation/RootVanigation";
import {
  AddNoteBtn,
  AddnoteContainer,
  AddNoteInput,
  BtnContainer,
  BtnText,
  GoBackBtn,
  HeaderTextAddNote,
} from "./styled";

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
        <HeaderTextAddNote>Add Note </HeaderTextAddNote>
        <AddNoteInput
          placeholder="enter title"
          multiline
          value={title}
          onChangeText={(e: string) => {
            setTitle(e);
          }}
        />
        <AddNoteInput
          placeholder="Note Details"
          multiline
          value={details}
          onChangeText={(e: string) => {
            setDetails(e);
          }}
        />
        <BtnContainer>
          <TouchableOpacity onPress={() => addNoteHandler()}>
            <AddNoteBtn>
              <BtnText>Add Note</BtnText>
            </AddNoteBtn>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.replace("AllNotes")}>
            <GoBackBtn>
              <BtnText>Go Back To Home</BtnText>
            </GoBackBtn>
          </TouchableOpacity>
        </BtnContainer>
      </KeyboardAvoidingView>
    </AddnoteContainer>
  );
};

export default AddNote;
