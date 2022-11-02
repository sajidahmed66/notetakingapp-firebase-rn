import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const ViewNoteContainer = styled.View`
  height: ${height}px;
  width: ${width}px;
  background-color: #404258;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px;
`;

export const ViewNotesHeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #e7f6f2;
`;

export const NoteDetailsView = styled.View`
  background-color: #50577a;
  width: 100%;
  height: 300px;
  margin: 15px 0px;
  padding: 15px;
  border-radius: 15px;
  border-color: black;
`;

export const NoteDetailsText = styled.Text`
  font-size: 15px;
  color: #e7f6f2;
  line-height: 22px;
`;

export const GobacktoHome = styled.TouchableOpacity`
  height: 55px;
  width: 120px;
  padding: 15px;
  background-color: #7d6e83;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;
