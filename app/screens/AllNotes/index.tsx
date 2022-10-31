import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParam } from "../../navigation/RootVanigation";
import Constants from "expo-constants";
import styled from "styled-components/native";
import {
  collection,
  getDocs,
  getFirestore,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { app } from "../../../config/firebaseConfig";

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
type Prop = NativeStackScreenProps<RootStackParam, "AllNotes">;

const { width, height } = Dimensions.get("window");

const Containter = styled.View`
  flex: 1;
  max-height: ${height}px;
  padding-top: ${Constants.statusBarHeight}px;
`;

// const headerHeight = useHeaderHeight();
const AllNote: React.FC<Prop> = ({ navigation }) => {
  const [notes, setNotes] = useState<any>();
  const [reload, setReload] = useState<any>({});
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
    <View style={styles.container}>
      <Text style={styles.headerText}>Note Lists</Text>
      <ScrollView>
        {notes?.length > 0 ? (
          notes.map((note: any) => (
            <View key={note?.id} style={styles.notetitleCard}>
              <TouchableOpacity
                style={styles.cardTitle}
                onPress={() => navigation.replace("ViewNote", { note })}
              >
                <Text>{note.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  deleteNoteHandler(note?.id);
                }}
              >
                <AntDesign name="delete" size={24} color="#251B37" />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text>No notes FOund</Text>
        )}
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.replace("AddNote")}>
        <View style={styles.fab}>
          <MaterialCommunityIcons
            name="note-text-outline"
            size={45}
            color="black"
          />
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
    // paddingTop: Constants.statusBarHeight,
    // borderColor: "black",
    // borderWidth: 2,
    paddingHorizontal: 10,
    position: "relative",
    paddingTop: 20,
    backgroundColor: "#FFF8EA",
  },
  headerText: {
    height: 50,
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  notetitleCard: {
    maxWidthwidth: width,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 15,
    borderColor: "gray",
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 30,
    backgroundColor: "#9E7676",
  },
  cardTitle: {
    width: "75%",
    height: "100%",
    // borderColor: "black",
    // borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 30,
    height: 70,
    width: 70,
    borderRadius: 35,
    // borderWidth: 2,
    backgroundColor: "#dee2e3",
    overflow: "hidden",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
