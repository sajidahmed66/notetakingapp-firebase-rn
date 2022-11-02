import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParam } from "../../navigation/RootVanigation";

import {
  collection,
  getDocs,
  getFirestore,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { app } from "../../../config/firebaseConfig";

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import {
  Containter,
  Fab,
  HeaderText,
  NoteCard,
  NoteCardTitle,
  TouchableTextTitle,
} from "./styled";

type Prop = NativeStackScreenProps<RootStackParam, "AllNotes">;

const AllNote: React.FC<Prop> = ({ navigation }) => {
  const [notes, setNotes] = useState<any>();
  const db = getFirestore(app);
  const notesCollectionRef = collection(db, "notes");

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(notesCollectionRef);

      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getNotes();
  }, []);

  const deleteNoteHandler = async (id: string) => {
    try {
      const noteDoc = doc(db, "notes", id);
      Alert.alert("Confirm delete", "Are you sure you want to delete?", [
        {
          text: "Confirm delete",
          onPress: async () => {
            deleteDoc(noteDoc).then(() => {
              const newNotesList = notes.filter(
                (doc: { id: string }) => doc?.id !== id
              );
              setNotes(newNotesList);
            });
          },
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
    } catch (error) {}
  };

  return (
    <Containter>
      <HeaderText>Note Lists</HeaderText>
      <ScrollView>
        {notes?.length > 0 ? (
          notes.map((note: any) => (
            <NoteCard key={note?.id}>
              <TouchableTextTitle
                onPress={() => navigation.replace("ViewNote", { note })}
              >
                <NoteCardTitle>{note.title}</NoteCardTitle>
              </TouchableTextTitle>
              <TouchableOpacity
                onPress={() => {
                  deleteNoteHandler(note?.id);
                }}
              >
                <AntDesign name="delete" size={24} color="#e7f6f2" />
              </TouchableOpacity>
            </NoteCard>
          ))
        ) : (
          <Text>No notes Found</Text>
        )}
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.replace("AddNote")}>
        <Fab>
          <MaterialCommunityIcons
            name="note-text-outline"
            size={45}
            color="black"
          />
        </Fab>
      </TouchableOpacity>
    </Containter>
  );
};

export default AllNote;
