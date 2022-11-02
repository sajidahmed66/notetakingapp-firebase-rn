import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParam } from "../../navigation/RootVanigation";
import { Ionicons } from "@expo/vector-icons";
import {
  GobacktoHome,
  NoteDetailsText,
  NoteDetailsView,
  ViewNoteContainer,
  ViewNotesHeaderText,
} from "./style";

type viewNoteProps = NativeStackScreenProps<RootStackParam, "ViewNote">;

const ViewNote: React.FC<viewNoteProps> = ({ route, navigation }) => {
  const note = route.params?.note;
  return (
    <ViewNoteContainer>
      <ViewNotesHeaderText>Note Details</ViewNotesHeaderText>
      <NoteDetailsView>
        <NoteDetailsText>{note?.details}</NoteDetailsText>
      </NoteDetailsView>
      <GobacktoHome onPress={() => navigation.replace("AllNotes")}>
        <Ionicons name="chevron-back" size={25} color="white" />
        <NoteDetailsText>Go back</NoteDetailsText>
      </GobacktoHome>
    </ViewNoteContainer>
  );
};

export default ViewNote;
